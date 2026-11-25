// ==========================================================================
// STUDIO MÔ HÌNH 3D GIẢI PHẪU HỌC TƯƠNG TÁC (THREE.JS WEBGL)
// 7 Mô hình 3D Giải phẫu Tương tác: Dạ dày, Gan & Phân thùy, Tụy & Tá tụy,
// Tim (Buồng & Van), Tim (Mạch vành & Dẫn truyền), ĐMC Bụng, TM Chủ dưới & TM Cửa
// ==========================================================================

window.Models3D = {
  renderer: null,
  scene: null,
  camera: null,
  controls: null,
  rafId: null,
  resizeHandler: null,
  raycaster: null,
  mouse: null,
  currentLessonId: null,
  selectedKey: null,
  xrayMode: false,
  animateFlow: true,
  autoRotate: false,
  showLabels: true,
  highlightGroup: [],
  outerMeshes: [],
  innerMeshes: [],
  flowParticles: [],
  clickableMeshes: [],
  pinAnchors: [],
  customTick: null,
  clock: null,

  dispose() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = null;
    }
    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }
    if (this.scene) {
      this.scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      this.scene = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
    this.camera = null;
    this.highlightGroup = [];
    this.outerMeshes = [];
    this.innerMeshes = [];
    this.flowParticles = [];
    this.clickableMeshes = [];
    this.pinAnchors = [];
    this.customTick = null;
  },

  // Helper: smooth tube along 3D control points
  makeTube(points, radius, color, opts = {}) {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
    const segs = opts.tubularSegments || 40;
    const radial = opts.radialSegments || 16;
    const geom = new THREE.TubeGeometry(curve, segs, radius, radial, !!opts.closed);
    const mat = new THREE.MeshPhysicalMaterial({
      color,
      roughness: opts.roughness ?? 0.35,
      metalness: opts.metalness ?? 0.05,
      clearcoat: opts.clearcoat ?? 0.45,
      clearcoatRoughness: 0.25,
      transparent: !!opts.transparent,
      opacity: opts.opacity ?? 1.0,
      side: opts.side || THREE.FrontSide
    });
    const mesh = new THREE.Mesh(geom, mat);
    if (opts.key) mesh.userData.key = opts.key;
    return { mesh, curve };
  },

  // Helper: organic deformed ellipsoid / organ lobe
  makeOrgan(rx, ry, rz, color, opts = {}) {
    const geom = new THREE.SphereGeometry(1, opts.wSeg || 36, opts.hSeg || 28);
    geom.scale(rx, ry, rz);
    if (opts.deform) {
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        const res = opts.deform(x, y, z);
        pos.setXYZ(i, res[0], res[1], res[2]);
      }
      geom.computeVertexNormals();
    }
    const mat = new THREE.MeshPhysicalMaterial({
      color,
      roughness: opts.roughness ?? 0.38,
      metalness: 0.04,
      clearcoat: opts.clearcoat ?? 0.5,
      clearcoatRoughness: 0.28,
      transparent: !!opts.transparent,
      opacity: opts.opacity ?? 1.0,
      depthWrite: opts.depthWrite ?? !(opts.transparent && (opts.opacity ?? 1) < 0.8),
      side: opts.doubleSide ? THREE.DoubleSide : THREE.FrontSide
    });
    const mesh = new THREE.Mesh(geom, mat);
    if (opts.pos) mesh.position.set(opts.pos[0], opts.pos[1], opts.pos[2]);
    if (opts.rot) mesh.rotation.set(opts.rot[0], opts.rot[1], opts.rot[2]);
    if (opts.key) mesh.userData.key = opts.key;
    return mesh;
  },

  // Helper: flow particle system along a CatmullRomCurve3
  addFlowParticles(parent, curve, color, count = 8, size = 0.065, speed = 0.28, reverse = false) {
    const geom = new THREE.SphereGeometry(size, 10, 10);
    const mat = new THREE.MeshBasicMaterial({ color });
    for (let i = 0; i < count; i++) {
      const dot = new THREE.Mesh(geom, mat);
      parent.add(dot);
      this.flowParticles.push({
        mesh: dot,
        curve,
        offset: i / count,
        speed: reverse ? -speed : speed
      });
    }
  },

  registerPart(mesh, key, isOuter = false, isInner = false) {
    mesh.userData.key = key;
    mesh.userData.origColor = mesh.material.color.getHex();
    mesh.userData.origEmissive = mesh.material.emissive ? mesh.material.emissive.getHex() : 0x000000;
    mesh.userData.origOpacity = mesh.material.opacity;
    mesh.userData.origTransparent = mesh.material.transparent;
    this.clickableMeshes.push(mesh);
    if (isOuter) this.outerMeshes.push(mesh);
    if (isInner) this.innerMeshes.push(mesh);
  },

  addPin(key, pos3d, labelText) {
    this.pinAnchors.push({ key, pos: new THREE.Vector3(pos3d[0], pos3d[1], pos3d[2]), label: labelText });
  },

  // ========================================================================
  // CATALOG OF 7 ANATOMICAL 3D MODELS
  // ========================================================================
  specs: {
    // --------------------------------------------------------------------
    // 1. DẠ DÀY 3D
    // --------------------------------------------------------------------
    1: {
      defaultCamera: [0.3, 0.4, 7.0],
      views: {
        front: [0.2, 0.3, 6.2],
        back: [0.2, 0.4, -6.2],
        top: [0.0, 6.2, 1.2],
        side: [5.8, 0.6, 1.8]
      },
      legend: [
        { color: "#e11d48", text: "Thành dạ dày & Nếp niêm mạc" },
        { color: "#ef4444", text: "2 Vòng ĐM bờ cong (Thân tạng)" },
        { color: "#6366f1", text: "Tĩnh mạch về hệ TM cửa" },
        { color: "#f59e0b", text: "Cơ thắt môn vị & Thực quản" }
      ],
      parts: {
        tamvi: {
          title: "1. Tâm vị & Thực quản bụng (Mốc T10)",
          lat: "Cardia • Khuyết tâm vị (Incisura cardiaca)",
          desc: "Tâm vị rộng ~3 cm, nối thực quản qua lỗ tâm vị (không có van thực sự). Nằm sau sụn sườn 7 trái, trước thân đốt sống ngực 10 (T10), lệch trái đường giữa 2,5 cm.",
          pearl: "Thoát vị trượt làm tâm vị trượt lên trung thất → trào ngược dịch vị; thoát vị cạnh thực quản giữ nguyên tâm vị dưới hoành."
        },
        dayvi: {
          title: "2. Đáy vị (Fundus) – Phần cao nhất",
          lat: "Fundus gastricus • Bóng hơi dạ dày",
          desc: "Hình chỏm cầu ở phía trên và trái mặt phẳng ngang qua khuyết tâm vị. Ở tư thế đứng chứa không khí tạo hình 'bóng hơi dạ dày' trên phim X-quang.",
          pearl: "Tầng cơ chéo trong cùng tập trung ở đáy vị. Cấp máu bổ sung bởi 5–7 ĐM vị ngắn & ĐM vị sau (từ ĐM lách)."
        },
        thanvi: {
          title: "3. Thân vị & Khuyết góc",
          lat: "Corpus gastricum • Incisura angularis",
          desc: "Phần lớn nhất, đi từ mặt phẳng ngang qua khuyết tâm vị đến khuyết góc ở bờ cong nhỏ. Mặt sau tạo thành trước hậu cung mạc nối (liên quan đuôi tụy, ĐM lách, thận trái).",
          pearl: "Khuyết góc nằm ở ranh giới phần đứng và phần ngang bờ cong nhỏ. Lớp cơ dọc dày nhất ở bờ cong nhỏ."
        },
        monvi: {
          title: "4. Hang môn vị – Ống môn vị – Cơ thắt (L1)",
          lat: "Pars pylorica • Sphincter pylori",
          desc: "Gồm hang môn vị thu hẹp dần thành ống môn vị đổ vào tá tràng D1. Lỗ môn vị chiếu bên phải đốt sống thắt lưng 1 (L1) ~1,25 cm. Phía trước có TM trước môn vị làm mốc mổ.",
          pearl: "Lớp cơ vòng dày nhất ở môn vị tạo cơ thắt môn vị (phì đại gây hẹp môn vị bẩm sinh ở trẻ nhỏ)."
        },
        vongnho: {
          title: "5. Vòng mạch Bờ cong nhỏ (ĐM Vị Trái & Phải)",
          lat: "A. gastrica sinistra & dextra",
          desc: "Chạy giữa 2 lá mạc nối nhỏ: ĐM vị trái tách từ ĐM thân tạng (nếp vị tụy trái); ĐM vị phải tách từ ĐM gan riêng nối vào.",
          pearl: "Tĩnh mạch vị trái và vị phải đổ trực tiếp về Tĩnh mạch cửa (TM vị trái nối vòng nối cửa–chủ thực quản!)."
        },
        vonglon: {
          title: "6. Vòng mạch Bờ cong lớn (ĐM Vị Mạc nối P & T)",
          lat: "A. gastroomentalis dextra & sinistra",
          desc: "Chạy trong dây chằng vị–kết tràng (mạc nối lớn): ĐM vị mạc nối phải (từ ĐM vị tá tràng) nối với ĐM vị mạc nối trái (từ ĐM lách).",
          pearl: "TM vị mạc nối phải đổ vào TM MTTT; TM vị mạc nối trái & TM vị ngắn đổ vào TM lách."
        }
      },
      build(root) {
        // Esophagus
        const eso = this.makeTube([[0.55, 2.35, -0.15], [0.5, 1.75, -0.08], [0.42, 1.32, 0.0]], 0.22, 0xfb7185, { transparent: true, opacity: 0.92 });
        root.add(eso.mesh);
        this.registerPart(eso.mesh, "tamvi", true, false);

        // Stomach J-shape body using custom curved tube with variable radius!
        const jPoints = [
          new THREE.Vector3(0.42, 1.32, 0.0),   // cardia
          new THREE.Vector3(0.05, 1.48, -0.04), // fundus transition
          new THREE.Vector3(-0.78, 1.35, -0.06),// fundus dome
          new THREE.Vector3(-0.72, 0.35, 0.05), // upper body
          new THREE.Vector3(-0.42, -0.78, 0.12),// lower body
          new THREE.Vector3(0.28, -1.38, 0.12), // angular / antrum
          new THREE.Vector3(1.12, -1.25, 0.04), // pyloric canal
          new THREE.Vector3(1.62, -0.92, -0.08) // pylorus -> D1
        ];
        const jCurve = new THREE.CatmullRomCurve3(jPoints);
        const segs = 72;
        const radSegs = 28;
        const stomGeom = new THREE.TubeGeometry(jCurve, segs, 1, radSegs, false);
        const pos = stomGeom.attributes.position;
        const frames = jCurve.computeFrenetFrames(segs, false);
        for (let i = 0; i <= segs; i++) {
          const t = i / segs;
          let r = 0.72;
          if (t < 0.14) r = 0.26 + t * 4.5;
          else if (t < 0.35) r = 0.89 - (t - 0.14) * 0.35;
          else if (t < 0.65) r = 0.82 - (t - 0.35) * 0.55;
          else if (t < 0.85) r = 0.65 - (t - 0.65) * 1.45;
          else r = 0.36 - (t - 0.85) * 0.7;

          const c = jCurve.getPointAt(t);
          for (let j = 0; j <= radSegs; j++) {
            const idx = i * (radSegs + 1) + j;
            const vx = pos.getX(idx) - c.x;
            const vy = pos.getY(idx) - c.y;
            const vz = pos.getZ(idx) - c.z;
            // flatten slightly front-to-back (anterior/posterior walls)
            pos.setXYZ(idx, c.x + vx * r, c.y + vy * r, c.z + vz * r * 0.72);
          }
        }
        stomGeom.computeVertexNormals();
        const stomMat = new THREE.MeshPhysicalMaterial({
          color: 0xe11d48,
          roughness: 0.38,
          metalness: 0.04,
          clearcoat: 0.55,
          clearcoatRoughness: 0.25,
          side: THREE.DoubleSide
        });
        const stomMesh = new THREE.Mesh(stomGeom, stomMat);
        root.add(stomMesh);
        this.registerPart(stomMesh, "thanvi", true, false);

        // Fundus dome highlight cap (subtle sculpted sphere dome)
        const fundusDome = this.makeOrgan(0.74, 0.68, 0.54, 0xf43f5e, { pos: [-0.62, 1.38, -0.04] });
        root.add(fundusDome);
        this.registerPart(fundusDome, "dayvi", true, false);

        // Pyloric sphincter muscular ring (visible clearly in X-ray!)
        const sphGeom = new THREE.TorusGeometry(0.28, 0.095, 16, 32);
        const sphMat = new THREE.MeshPhysicalMaterial({ color: 0xf59e0b, roughness: 0.3, clearcoat: 0.4 });
        const sphMesh = new THREE.Mesh(sphGeom, sphMat);
        sphMesh.position.set(1.52, -0.98, -0.05);
        sphMesh.rotation.set(0.2, 1.0, 0.5);
        root.add(sphMesh);
        this.registerPart(sphMesh, "monvi", false, true);

        // Inner mucosal folds (Gastric rugae / ống vị - visible in X-ray mode!)
        for (let k = -1; k <= 1; k++) {
          const foldPts = [
            [0.32 + k * 0.14, 1.1, 0.05 * k],
            [0.05 + k * 0.18, 0.2, 0.08 * k],
            [0.15 + k * 0.16, -0.75, 0.05 * k],
            [0.95 + k * 0.08, -1.18, 0.0]
          ];
          const fold = this.makeTube(foldPts, 0.042, 0xfda4af, { roughness: 0.5 });
          root.add(fold.mesh);
          this.registerPart(fold.mesh, "thanvi", false, true);
        }

        // Duodenum D1 stump
        const d1 = this.makeTube([[1.58, -0.94, -0.06], [2.05, -0.68, -0.18], [2.25, -1.15, -0.24]], 0.23, 0xfb923c, { transparent: true, opacity: 0.85 });
        root.add(d1.mesh);
        this.registerPart(d1.mesh, "monvi", true, false);

        // Lesser curvature arterial arcade (ĐM vị trái + ĐM vị phải)
        const lesserArc = this.makeTube([
          [0.45, 1.08, 0.28], [0.28, 0.42, 0.32], [0.35, -0.45, 0.28], [0.85, -0.95, 0.16], [1.45, -0.82, 0.08]
        ], 0.052, 0xdc2626);
        root.add(lesserArc.mesh);
        this.registerPart(lesserArc.mesh, "vongnho", false, false);
        this.addFlowParticles(root, lesserArc.curve, 0xfef08a, 6, 0.06, 0.26);

        // Greater curvature arterial arcade (ĐM vị mạc nối trái + phải)
        const greaterArc = this.makeTube([
          [-1.32, 0.95, 0.12], [-1.38, -0.05, 0.24], [-1.05, -1.08, 0.28], [-0.15, -1.82, 0.24], [0.98, -1.58, 0.14], [1.62, -1.18, 0.02]
        ], 0.058, 0xdc2626);
        root.add(greaterArc.mesh);
        this.registerPart(greaterArc.mesh, "vonglon", false, false);
        this.addFlowParticles(root, greaterArc.curve, 0xfef08a, 8, 0.065, 0.24);

        // Prepyloric vein of Mayo (blue landmark vein)
        const mayoV = this.makeTube([[1.42, -1.25, 0.24], [1.45, -0.92, 0.25], [1.48, -0.62, 0.16]], 0.036, 0x3b82f6);
        root.add(mayoV.mesh);
        this.registerPart(mayoV.mesh, "monvi", false, false);

        // Reference pins
        this.addPin("tamvi", [0.48, 1.65, 0.25], "Tâm vị (T10)");
        this.addPin("dayvi", [-0.72, 1.68, 0.15], "Đáy vị (Bóng hơi)");
        this.addPin("thanvi", [-0.38, 0.05, 0.62], "Thân vị");
        this.addPin("monvi", [1.45, -0.92, 0.35], "Cơ thắt môn vị (L1)");
        this.addPin("vongnho", [0.38, 0.15, 0.38], "Vòng ĐM bờ cong nhỏ");
        this.addPin("vonglon", [-0.55, -1.58, 0.34], "Vòng ĐM bờ cong lớn");
      }
    },

    // --------------------------------------------------------------------
    // 2. GAN, ĐƯỜNG MẬT & 8 HẠ PHÂN THÙY 3D
    // --------------------------------------------------------------------
    2: {
      defaultCamera: [0.2, 0.4, 7.2],
      views: {
        front: [0.0, 0.3, 6.4],
        back: [0.0, 0.2, -6.4],
        top: [0.0, 6.0, 1.2],
        side: [5.5, -1.5, 3.0]
      },
      legend: [
        { color: "#991b1b", text: "Gan Phải (V, VI, VII, VIII)" },
        { color: "#be123c", text: "Gan Trái (II, III, IV) + Thùy đuôi (I)" },
        { color: "#16a34a", text: "Túi mật & Đường mật ngoài gan" },
        { color: "#6366f1", text: "TM Cửa, TMCD & 3 TM Gan" }
      ],
      parts: {
        ganphai: {
          title: "1. Nửa Gan Phải (Phân thùy Trước V, VIII & Sau VI, VII)",
          lat: "Lobus hepatis dexter • Khe liên phân thùy phải",
          desc: "Ngăn cách với gan trái bởi KHE GIỮA (chứa TM gan giữa, đi từ giữa hố túi mật → giữa TMCD). Khe phải (chứa TM gan phải) chia thành Phân thùy trước (V dưới, VIII trên) và Phân thùy sau (VI dưới, VII trên).",
          pearl: "Mặt hoành phần phải liên quan cung sườn VII–XI phải; mặt trên lên tới khoang liên sườn IV đường trung đòn phải."
        },
        gantrai: {
          title: "2. Nửa Gan Trái (HPT II, III, IV) & Dây chằng liềm",
          lat: "Lobus hepatis sinister • Lig. falciforme",
          desc: "Khe liên phân thùy trái (chứa TM gan trái) trùng với dây chằng liềm ở mặt hoành & rãnh dọc trái ở mặt tạng → chia phân thùy bên (II trên, III dưới) và phân thùy giữa (IV + I).",
          pearl: "BẪY THI: Dây chằng liềm KHÔNG phải khe giữa gan! Giữa khe giữa và khe trái ở mặt hoành là HPT IV."
        },
        thuyduoi: {
          title: "3. Thùy đuôi (Hạ phân thùy I) & Thùy vuông",
          lat: "Lobus caudatus (Seg. I) • Lobus quadratus (IVb)",
          desc: "Đều CHỈ thấy ở mặt tạng. Thùy đuôi (HPT I) nằm sau cửa gan, giữa rãnh TMCD (phải) và khe dây chằng tĩnh mạch (trái). Thùy vuông nằm trước cửa gan, giữa hố túi mật và khe DC tròn.",
          pearl: "HPT I là thùy đuôi (không phải IV!). Dây chằng tròn là di tích TM rốn; dây chằng tĩnh mạch là di tích ống tĩnh mạch."
        },
        tuimat: {
          title: "4. Túi mật & Ống túi mật (Đường mật phụ)",
          lat: "Vesica biliaris • Ductus cysticus",
          desc: "Nằm trong hố túi mật mặt tạng, đáy túi mật chiếu ngang sụn sườn 9 đường trung đòn phải. Niêm mạc ống túi mật có nếp hình xoắn ốc.",
          pearl: "Tam giác Calot giới hạn bởi: ống gan chung + ống túi mật + mặt tạng gan → chứa ĐM túi mật (thường từ ĐM gan phải)."
        },
        cuagan: {
          title: "5. Cửa gan & Ống mật chủ (Đường mật chính)",
          lat: "Porta hepatis • Ductus choledochus",
          desc: "3 thành phần chính đi qua cửa gan: Ống gan chung (hoặc OMC), ĐM gan riêng, TM cửa. OMC đi trước phải TM cửa → sau D1 → sau đầu tụy → thành sau trong D2 (hẹp nhất ở đoạn trong thành tá tràng).",
          pearl: "Đường mật chính (ống gan P/T, ống gan chung, OMC) không thể cắt bỏ; đường mật phụ (túi mật, ống túi mật) có thể cắt bỏ."
        },
        tmgan: {
          title: "6. Tĩnh mạch Chủ dưới & 3 Tĩnh mạch Gan",
          lat: "V. cava inferior • Vv. hepaticae (P, Giữa, T)",
          desc: "3 tĩnh mạch gan (phải, giữa, trái) chạy trong 3 khe phân thùy gan rồi đổ vào TMCD ngay dưới cơ hoành. TMCD là phương tiện cố định gan quan trọng nhất.",
          pearl: "Bộ ba khoảng cửa gồm: nhánh ĐM gan, nhánh TM cửa, ống mật (KHÔNG có TM gan!)."
        }
      },
      build(root) {
        // Right lobe (V, VI, VII, VIII) - wedge sculpted
        const rightLobe = this.makeOrgan(1.32, 1.05, 0.92, 0x991b1b, {
          pos: [-0.72, 0.2, 0.0],
          deform: (x, y, z) => {
            // flatten bottom slightly as visceral surface slanted up-left
            const ny = y < -0.25 ? -0.25 + (y + 0.25) * 0.45 : y;
            return [x, ny, z];
          }
        });
        root.add(rightLobe);
        this.registerPart(rightLobe, "ganphai", true, false);

        // Left lobe (II, III, IV) - tapered towards viewer's right (anatomical left)
        const leftLobe = this.makeOrgan(1.25, 0.78, 0.72, 0xbe123c, {
          pos: [0.85, 0.32, 0.05],
          deform: (x, y, z) => {
            const taper = Math.max(0.25, 1.0 - Math.max(0, x) * 0.55);
            return [x, y * taper, z * taper];
          }
        });
        root.add(leftLobe);
        this.registerPart(leftLobe, "gantrai", true, false);

        // Caudate lobe (Seg I) at posterior visceral surface
        const caudate = this.makeOrgan(0.38, 0.45, 0.34, 0x9f1239, { pos: [0.02, 0.15, -0.68] });
        root.add(caudate);
        this.registerPart(caudate, "thuyduoi", false, false);

        // Falciform ligament + Round ligament
        const falcGeom = new THREE.BoxGeometry(0.06, 0.95, 0.75);
        const falcMat = new THREE.MeshPhysicalMaterial({ color: 0xfef3c7, transparent: true, opacity: 0.78, roughness: 0.4 });
        const falc = new THREE.Mesh(falcGeom, falcMat);
        falc.position.set(0.36, 0.55, 0.48);
        root.add(falc);
        this.registerPart(falc, "gantrai", false, false);

        const roundLig = this.makeTube([[0.36, 0.15, 0.85], [0.32, -0.35, 0.52], [0.22, -0.38, -0.05]], 0.048, 0xfde68a);
        root.add(roundLig.mesh);
        this.registerPart(roundLig.mesh, "thuyduoi", false, false);

        // Gallbladder + Cystic duct
        const gb = this.makeOrgan(0.28, 0.48, 0.28, 0x16a34a, {
          pos: [-0.45, -0.45, 0.48],
          rot: [0.75, 0, -0.3]
        });
        root.add(gb);
        this.registerPart(gb, "tuimat", false, false);

        const cysticDuct = this.makeTube([[-0.35, -0.25, 0.25], [-0.18, -0.35, 0.06], [-0.08, -0.62, -0.02]], 0.042, 0x22c55e);
        root.add(cysticDuct.mesh);
        this.registerPart(cysticDuct.mesh, "tuimat", false, false);

        // Common Hepatic + Common Bile Duct + R/L Hepatic Ducts
        const rHepDuct = this.makeTube([[-0.68, 0.05, 0.0], [-0.25, -0.18, 0.0], [-0.05, -0.38, 0.0]], 0.045, 0x10b981);
        const lHepDuct = this.makeTube([[0.58, 0.12, 0.0], [0.18, -0.15, 0.0], [-0.05, -0.38, 0.0]], 0.045, 0x10b981);
        const cbd = this.makeTube([[-0.05, -0.38, 0.0], [-0.08, -0.62, -0.02], [-0.14, -1.28, -0.15]], 0.055, 0x16a34a);
        root.add(rHepDuct.mesh, lHepDuct.mesh, cbd.mesh);
        this.registerPart(rHepDuct.mesh, "cuagan", false, true);
        this.registerPart(lHepDuct.mesh, "cuagan", false, true);
        this.registerPart(cbd.mesh, "cuagan", false, false);
        this.addFlowParticles(root, cbd.curve, 0xbef264, 5, 0.045, 0.3);

        // Portal Vein entering Porta Hepatis & branching inside
        const pvTrunk = this.makeTube([[0.12, -1.25, -0.24], [0.02, -0.42, -0.18], [-0.02, -0.15, -0.14]], 0.11, 0x6366f1);
        const pvRight = this.makeTube([[-0.02, -0.15, -0.14], [-0.75, 0.08, -0.08], [-1.35, 0.25, 0.0]], 0.075, 0x6366f1);
        const pvLeft = this.makeTube([[-0.02, -0.15, -0.14], [0.55, 0.18, -0.05], [1.15, 0.35, 0.02]], 0.068, 0x6366f1);
        root.add(pvTrunk.mesh, pvRight.mesh, pvLeft.mesh);
        this.registerPart(pvTrunk.mesh, "cuagan", false, false);
        this.registerPart(pvRight.mesh, "cuagan", false, true);
        this.registerPart(pvLeft.mesh, "cuagan", false, true);
        this.addFlowParticles(root, pvTrunk.curve, 0xa5b4fc, 5, 0.06, 0.32);

        // Proper Hepatic Artery (red)
        const ha = this.makeTube([[0.18, -1.18, -0.04], [0.12, -0.38, -0.02], [-0.08, -0.12, -0.02]], 0.048, 0xef4444);
        root.add(ha.mesh);
        this.registerPart(ha.mesh, "cuagan", false, false);

        // Inferior Vena Cava & 3 Hepatic Veins (inside, highlighted in X-ray!)
        const ivc = this.makeTube([[-0.38, -1.35, -0.78], [-0.35, 0.25, -0.78], [-0.32, 1.45, -0.75]], 0.17, 0x2563eb);
        const hvR = this.makeTube([[-1.45, 0.55, 0.05], [-0.88, 0.85, -0.35], [-0.34, 1.05, -0.72]], 0.065, 0x38bdf8);
        const hvM = this.makeTube([[-0.18, 0.12, 0.45], [-0.22, 0.65, -0.15], [-0.33, 1.05, -0.72]], 0.065, 0x38bdf8);
        const hvL = this.makeTube([[0.95, 0.45, 0.15], [0.35, 0.85, -0.28], [-0.33, 1.05, -0.72]], 0.06, 0x38bdf8);
        root.add(ivc.mesh, hvR.mesh, hvM.mesh, hvL.mesh);
        this.registerPart(ivc.mesh, "tmgan", false, false);
        this.registerPart(hvR.mesh, "tmgan", false, true);
        this.registerPart(hvM.mesh, "tmgan", false, true);
        this.registerPart(hvL.mesh, "tmgan", false, true);

        this.addPin("ganphai", [-1.05, 0.55, 0.72], "Gan phải (V–VIII)");
        this.addPin("gantrai", [0.95, 0.48, 0.48], "Gan trái (II–IV)");
        this.addPin("thuyduoi", [0.02, 0.18, -0.95], "Thùy đuôi (HPT I)");
        this.addPin("tuimat", [-0.52, -0.72, 0.68], "Túi mật & Calot");
        this.addPin("cuagan", [0.02, -0.68, 0.06], "Cửa gan & OMC");
        this.addPin("tmgan", [-0.34, 1.32, -0.75], "TMCD & 3 TM gan");
      }
    },

    // --------------------------------------------------------------------
    // 3. TỤY & KHỐI TÁ TỤY 3D
    // --------------------------------------------------------------------
    3: {
      defaultCamera: [0.1, 0.3, 7.0],
      views: {
        front: [0.0, 0.2, 6.2],
        back: [0.0, 0.2, -6.2],
        top: [0.0, 5.8, 1.8],
        side: [-5.6, 0.3, 2.2]
      },
      legend: [
        { color: "#f59e0b", text: "Tụy (Đầu, Mỏm móc, Cổ, Thân, Đuôi)" },
        { color: "#fb923c", text: "Khung Tá tràng D1–D4" },
        { color: "#38bdf8", text: "Ống Wirsung, Santorini & OMC" },
        { color: "#ef4444", text: "ĐMC bụng, ĐM MTTT & ĐM Lách" }
      ],
      parts: {
        dautuy: {
          title: "1. Đầu tụy & Mỏm móc (Uncinate Process)",
          lat: "Caput pancreatis • Processus uncinatus",
          desc: "Nằm gọn trong khung tá tràng chữ C (D2 dính chặt đầu tụy nhất). Mỏm móc nằm phía sau bó mạch MTTT và phía trước ĐMC bụng. Phía sau đầu tụy có OMC xẻ rãnh → u đầu tụy chèn ép OMC gây vàng da tắc mật!",
          pearl: "Mặt trước có rễ mạc treo kết tràng ngang bám và rãnh ĐM vị tá tràng. Nhiều tế bào nội tiết F (PP) ở mỏm móc."
        },
        cotuy: {
          title: "2. Cổ tụy (Khuyết tụy) & Bó mạch MTTT",
          lat: "Collum pancreatis • Vasa mesenterica superiora",
          desc: "Phần mỏng do bó mạch Mạc treo tràng trên ấn từ phía sau vào. Ngay mặt sau cổ tụy là nơi TM lách hợp lưu với TM MTTT tạo Tĩnh mạch cửa.",
          pearl: "CÂU BẪY KINH ĐIỂN: Bó mạch MTTT ấn vào tạo cổ tụy (KHÔNG phải bó mạch mạc treo tràng dưới!)."
        },
        thanduoi: {
          title: "3. Thân tụy & Đuôi tụy (Cấp máu từ ĐM Lách)",
          lat: "Corpus & Cauda pancreatis",
          desc: "Thân tụy mặt trước phủ phúc mạc (qua hậu cung mạc nối liên quan dạ dày), mặt sau không phúc mạc bắt ngang ĐMC bụng, thận trái, thượng thận trái và TM lách. Đuôi tụy dài ~3 cm hướng rốn lách.",
          pearl: "Thân & đuôi được nuôi bởi ĐM tụy lưng, ĐM tụy lớn, ĐM đuôi tụy (từ ĐM lách) và ĐM tụy ngang. Đau tụy lan ra sau lưng do dây giao cảm thành bụng sau."
        },
        ongtuy: {
          title: "4. Ống Wirsung, Santorini & Bóng Gan–Tụy (Vater)",
          lat: "Ductus pancreaticus major & accessorius • Oddi",
          desc: "Ống tụy chính (Wirsung) đi từ đuôi → thân → đầu tụy; 50% hợp với OMC tạo bóng gan–tụy có cơ vòng Oddi đổ vào nhú tá lớn (thành sau trong D2). Ống phụ Santorini đổ vào nhú tá bé (trên trước ~2 cm).",
          pearl: "Sỏi kẹt bóng Vater khiến dịch mật trào ngược vào ống Wirsung → viêm tụy cấp."
        },
        d3tatrang: {
          title: "5. Tá tràng D1–D4 & Hội chứng ĐM MTTT (Von Rokitansky)",
          lat: "Duodenum (D1–D4) • Treitz",
          desc: "D1 (2/3 đầu = hành tá tràng di động), D2 (thành sau trong có nhú tá lớn/bé), D3 (nằm trước cột sống L3–L4 bị kẹp giữa ĐMC bụng sau và ĐM MTTT trước → dễ vỡ khi chấn thương & hội chứng ĐM MTTT), D4 (treo bởi cơ Treitz).",
          pearl: "Góc tá–hỗng tràng là mốc phân chia xuất huyết tiêu hóa trên và dưới!"
        }
      },
      build(root) {
        // C-shaped Duodenum (D1 -> D2 -> D3 -> D4 -> DJ flexure)
        const duo = this.makeTube([
          [-1.55, 1.05, 0.2],   // D1
          [-1.92, 0.85, 0.05],  // sup angle
          [-1.95, -0.05, 0.0],  // D2
          [-1.72, -1.02, 0.02], // inf angle
          [-0.85, -1.25, 0.08], // D3 crossing spine/aorta
          [0.05, -1.18, 0.08],  // D3 under SMA
          [0.72, -0.82, 0.02],  // D4 ascending
          [0.92, -0.35, -0.15]  // DJ flexure
        ], 0.25, 0xfb923c, { transparent: true, opacity: 0.9 });
        root.add(duo.mesh);
        this.registerPart(duo.mesh, "d3tatrang", true, false);

        // Pancreas Head
        const head = this.makeOrgan(0.62, 0.72, 0.34, 0xf59e0b, { pos: [-1.15, -0.28, -0.02] });
        root.add(head);
        this.registerPart(head, "dautuy", true, false);

        // Uncinate process (tucked behind SMA!)
        const uncinate = this.makeOrgan(0.42, 0.34, 0.25, 0xd97706, { pos: [-0.62, -0.78, -0.22] });
        root.add(uncinate);
        this.registerPart(uncinate, "dautuy", true, false);

        // Neck (thin bridge in front of SMA/SMV)
        const neck = this.makeOrgan(0.38, 0.44, 0.24, 0xfbbf24, { pos: [-0.45, -0.08, 0.08] });
        root.add(neck);
        this.registerPart(neck, "cotuy", true, false);

        // Body & Tail curving up-left toward splenic hilum
        const bodyTail = this.makeTube([
          [-0.35, -0.05, 0.04],
          [0.45, 0.22, -0.02],
          [1.25, 0.48, -0.12],
          [1.98, 0.85, -0.28]
        ], 0.31, 0xf59e0b, { tubularSegments: 32 });
        // Taper tail gently
        const bPos = bodyTail.mesh.geometry.attributes.position;
        for (let i = 0; i < bPos.count; i++) {
          const px = bPos.getX(i);
          if (px > 1.2) {
            const factor = Math.max(0.45, 1.0 - (px - 1.2) * 0.52);
            const cy = 0.48 + (px - 1.25) * 0.45;
            bPos.setY(i, cy + (bPos.getY(i) - cy) * factor);
          }
        }
        bodyTail.mesh.geometry.computeVertexNormals();
        root.add(bodyTail.mesh);
        this.registerPart(bodyTail.mesh, "thanduoi", true, false);

        // Main Pancreatic Duct (Wirsung) inside pancreas -> Major papilla
        const wirsung = this.makeTube([
          [1.82, 0.82, -0.24],
          [1.08, 0.42, -0.08],
          [0.25, 0.14, 0.02],
          [-0.55, -0.08, 0.04],
          [-1.12, -0.35, 0.02],
          [-1.82, -0.32, 0.02]
        ], 0.048, 0x38bdf8);
        root.add(wirsung.mesh);
        this.registerPart(wirsung.mesh, "ongtuy", false, true);
        this.addFlowParticles(root, wirsung.curve, 0xe0f2fe, 6, 0.045, 0.28);

        // Accessory Duct (Santorini) -> Minor papilla
        const santorini = this.makeTube([
          [-1.08, -0.22, 0.04], [-1.42, -0.04, 0.04], [-1.82, 0.02, 0.03]
        ], 0.032, 0x7dd3fc);
        root.add(santorini.mesh);
        this.registerPart(santorini.mesh, "ongtuy", false, true);

        // Common Bile Duct descending behind head to Ampulla of Vater
        const cbd = this.makeTube([
          [-1.12, 1.35, -0.35], [-1.18, 0.45, -0.26], [-1.25, -0.18, -0.15], [-1.82, -0.32, 0.02]
        ], 0.056, 0x16a34a);
        root.add(cbd.mesh);
        this.registerPart(cbd.mesh, "ongtuy", false, true);

        // Abdominal Aorta behind pancreas & D3
        const aorta = this.makeTube([[0.05, 1.55, -0.52], [0.0, 0.0, -0.52], [-0.05, -1.75, -0.52]], 0.14, 0xdc2626);
        root.add(aorta.mesh);
        this.registerPart(aorta.mesh, "d3tatrang", false, false);

        // SMA emerging from Aorta above pancreas, running behind neck and IN FRONT OF uncinate & D3!
        const sma = this.makeTube([[0.02, 0.45, -0.46], [-0.15, 0.15, -0.16], [-0.24, -0.55, 0.12], [-0.28, -1.65, 0.32]], 0.068, 0xef4444);
        root.add(sma.mesh);
        this.registerPart(sma.mesh, "cotuy", false, false);
        this.addFlowParticles(root, sma.curve, 0xfef08a, 5, 0.055, 0.3);

        // SMV + Splenic Vein -> Portal Vein behind neck!
        const smv = this.makeTube([[-0.52, -1.65, 0.22], [-0.45, -0.45, 0.02], [-0.42, 0.12, -0.14]], 0.072, 0x3b82f6);
        const splV = this.makeTube([[1.85, 0.72, -0.42], [0.75, 0.35, -0.26], [-0.42, 0.12, -0.14]], 0.065, 0x3b82f6);
        const pv = this.makeTube([[-0.42, 0.12, -0.14], [-0.55, 0.85, -0.22], [-0.68, 1.45, -0.26]], 0.092, 0x6366f1);
        root.add(smv.mesh, splV.mesh, pv.mesh);
        this.registerPart(smv.mesh, "cotuy", false, false);
        this.registerPart(splV.mesh, "thanduoi", false, true);
        this.registerPart(pv.mesh, "cotuy", false, false);

        // Tortuous Splenic Artery along superior border
        const splA = this.makeTube([
          [-0.02, 0.82, -0.38], [0.42, 0.65, -0.18], [0.78, 0.78, -0.14], [1.18, 0.72, -0.2], [1.55, 0.95, -0.24], [1.95, 1.02, -0.32]
        ], 0.048, 0xef4444);
        root.add(splA.mesh);
        this.registerPart(splA.mesh, "thanduoi", false, false);

        this.addPin("dautuy", [-1.18, -0.42, 0.35], "Đầu tụy & Mỏm móc");
        this.addPin("cotuy", [-0.36, -0.18, 0.35], "Cổ tụy & Bó mạch MTTT");
        this.addPin("thanduoi", [1.05, 0.55, 0.25], "Thân & Đuôi tụy");
        this.addPin("ongtuy", [-1.78, -0.32, 0.32], "Bóng Vater (Wirsung + OMC)");
        this.addPin("d3tatrang", [-0.25, -1.25, 0.35], "Tá tràng D3 (Kẹp ĐM MTTT)");
      }
    },

    // --------------------------------------------------------------------
    // 4. TIM – HÌNH THỂ NGOÀI, 4 BUỒNG & 4 VAN TIM 3D
    // --------------------------------------------------------------------
    4: {
      defaultCamera: [0.2, 0.3, 7.2],
      views: {
        front: [0.2, 0.2, 6.2],
        back: [-0.2, 0.3, -6.2],
        top: [0.0, 5.8, 1.8],
        side: [5.5, 0.2, 2.2]
      },
      legend: [
        { color: "#e11d48", text: "Thất trái (dày 3×) & ĐMC" },
        { color: "#3b82f6", text: "Nhĩ/Thất phải & TM Chủ / ĐM Phổi" },
        { color: "#fbbf24", text: "4 Van tim (3 lá, 2 lá, ĐMC, ĐMP)" },
        { color: "#a855f7", text: "Vách gian thất (Màng & Cơ)" }
      ],
      parts: {
        nhitrai: {
          title: "1. Tâm nhĩ trái & Đáy tim (Liên quan Thực quản)",
          lat: "Atrium sinistrum • 4 Vv. pulmonales",
          desc: "Chiếm phần lớn ĐÁY TIM (hướng ra sau, sang phải), nhận 4 tĩnh mạch phổi. Mặt trái vách gian nhĩ có van lỗ bầu dục.",
          pearl: "Phía sau tâm nhĩ trái liên quan trực tiếp THỰC QUẢN → hẹp van 2 lá làm nhĩ trái giãn to chèn thực quản gây nuốt nghẹn!"
        },
        nhiphai: {
          title: "2. Tâm nhĩ phải & Rãnh tận cùng",
          lat: "Atrium dextrum • Sulcus terminalis",
          desc: "Nhận máu từ TM chủ trên (không van!), TM chủ dưới (có van) và xoang TM vành (có van). Mặt phải vách gian nhĩ có HỐ BẦU DỤC. Bờ ngoài có rãnh tận cùng nối bờ phải TMCT–TMCD.",
          pearl: "Vì lỗ TMCT không có van nên suy tim phải làm máu ứ dội ngược lên các tĩnh mạch cổ (tĩnh mạch cổ nổi)."
        },
        thatphai: {
          title: "3. Tâm thất phải & Van 3 lá / Phễu ĐM phổi",
          lat: "Ventriculus dexter • Valva tricuspidalis",
          desc: "Hình tháp 3 mặt, thành mỏng hơn thất trái 3 lần. Đậy lỗ nhĩ–thất bằng VAN 3 LÁ (trước, sau, trong). Phần trên thu hẹp thành nón ĐM (phễu) đổ qua VAN ĐM PHỔI (3 van bán nguyệt: trước, phải, trái).",
          pearl: "Ổ nghe van 3 lá ở mỏm mũi kiếm xương ức; ổ nghe van ĐM phổi ở KLS 2 cạnh bờ trái xương ức."
        },
        thattrai: {
          title: "4. Tâm thất trái, Đỉnh tim & Van 2 lá / Van ĐMC",
          lat: "Ventriculus sinister • Valva mitralis & aortae",
          desc: "Tạo nên ĐỈNH TIM (KLS 4–5 đường trung đòn trái) và phần lớn mặt phổi. Thành dày nhất để bơm máu qua VAN ĐMC (3 van bán nguyệt + 3 xoang Valsalva: phải, trái, sau không vành). Có VAN 2 LÁ (lá trước, lá sau).",
          pearl: "Ổ nghe van 2 lá ở MỎM TIM; van ĐMC ở KLS 2 bờ phải xương ức. Hai lỗ ĐMV đều nằm dưới đường SJ."
        },
        vach: {
          title: "5. Vách gian thất (Phần màng & Phần cơ) & Bờ tim",
          lat: "Septum interventriculare • Bờ sắc / Bờ tù",
          desc: "Phần màng mỏng ở trên gần lỗ nhĩ–thất; phần cơ dày cong lồi sang thất phải. Lâm sàng: Bờ phải (bờ sắc) ngăn mặt ức sườn & mặt hoành; Bờ trái (bờ tù) ngăn mặt ức sườn & mặt phổi.",
          pearl: "Rãnh vành chạy liên tục từ mặt trước xuống mặt hoành; Khuyết đỉnh tim là nơi gặp rãnh gian thất trước & sau."
        }
      },
      build(root) {
        // Right Ventricle (anterior-right, thinner blue-reddish wall)
        const rv = this.makeOrgan(0.76, 1.08, 0.72, 0x6366f1, {
          pos: [-0.36, -0.35, 0.25],
          rot: [0.15, 0.1, -0.42],
          deform: (x, y, z) => [x * (y < 0 ? 1 + y * 0.3 : 1), y, z]
        });
        root.add(rv);
        this.registerPart(rv, "thatphai", true, false);

        // Left Ventricle (posterior-left apex pointing down-left-forward)
        const lv = this.makeOrgan(0.76, 1.28, 0.76, 0xe11d48, {
          pos: [0.46, -0.45, 0.02],
          rot: [0.18, 0.0, -0.48],
          deform: (x, y, z) => {
            const tap = y < 0 ? Math.max(0.32, 1.0 + y * 0.45) : 1.0;
            return [x * tap, y, z * tap];
          }
        });
        root.add(lv);
        this.registerPart(lv, "thattrai", true, false);

        // Right Atrium (right-upper)
        const ra = this.makeOrgan(0.62, 0.65, 0.56, 0x3b82f6, { pos: [-0.88, 0.52, -0.05] });
        root.add(ra);
        this.registerPart(ra, "nhiphai", true, false);

        // Left Atrium (posterior base)
        const la = this.makeOrgan(0.64, 0.55, 0.55, 0xf43f5e, { pos: [0.32, 0.68, -0.58] });
        root.add(la);
        this.registerPart(la, "nhitrai", true, false);

        // Interventricular septum (visible inside in X-ray mode!)
        const septGeom = new THREE.BoxGeometry(0.11, 1.55, 0.85);
        const septMat = new THREE.MeshPhysicalMaterial({ color: 0xa855f7, roughness: 0.4 });
        const septum = new THREE.Mesh(septGeom, septMat);
        septum.position.set(0.08, -0.38, 0.12);
        septum.rotation.set(0.12, 0, -0.44);
        root.add(septum);
        this.registerPart(septum, "vach", false, true);

        // 4 Heart Valves inside (golden glowing rings visible in X-ray!)
        const valveDefs = [
          { key: "thatphai", pos: [-0.48, 0.25, 0.08], rot: [1.1, 0.2, 0.2], color: 0xfbbf24, r: 0.22 }, // Tricuspid
          { key: "thattrai", pos: [0.34, 0.32, -0.22], rot: [1.1, -0.2, 0.2], color: 0xfde047, r: 0.21 }, // Mitral
          { key: "thatphai", pos: [-0.15, 0.72, 0.34], rot: [1.4, 0, 0.3], color: 0x38bdf8, r: 0.16 }, // Pulmonary
          { key: "thattrai", pos: [0.05, 0.68, 0.05], rot: [1.5, 0, 0], color: 0xfb923c, r: 0.16 }    // Aortic
        ];
        valveDefs.forEach((v) => {
          const vg = new THREE.TorusGeometry(v.r, 0.055, 14, 28);
          const vm = new THREE.MeshPhysicalMaterial({ color: v.color, emissive: v.color, emissiveIntensity: 0.25, roughness: 0.25 });
          const vmesh = new THREE.Mesh(vg, vm);
          vmesh.position.set(v.pos[0], v.pos[1], v.pos[2]);
          vmesh.rotation.set(v.rot[0], v.rot[1], v.rot[2]);
          root.add(vmesh);
          this.registerPart(vmesh, v.key, false, true);
        });

        // Great Vessels: SVC, IVC, Pulmonary Trunk, Ascending Aorta + Arch + 3 supra-aortic branches, 4 Pulmonary Veins
        const svc = this.makeTube([[-0.88, 0.95, -0.05], [-0.92, 1.85, -0.08]], 0.18, 0x2563eb);
        const ivc = this.makeTube([[-0.92, 0.15, -0.25], [-0.96, -0.68, -0.35]], 0.2, 0x2563eb);
        const pulmTrunk = this.makeTube([[-0.2, 0.35, 0.45], [-0.08, 1.15, 0.28], [0.22, 1.48, -0.08], [0.85, 1.52, -0.25]], 0.18, 0x60a5fa);
        const rPulm = this.makeTube([[0.18, 1.45, -0.08], [-0.55, 1.42, -0.28], [-1.22, 1.38, -0.35]], 0.13, 0x60a5fa);
        const aorta = this.makeTube([
          [0.05, 0.55, 0.04], [-0.08, 1.35, 0.08], [0.05, 1.98, -0.05], [0.42, 1.92, -0.38], [0.48, 0.95, -0.78], [0.45, -0.55, -0.82]
        ], 0.2, 0xdc2626);
        // 3 arch branches
        const b1 = this.makeTube([[-0.05, 1.88, 0.02], [-0.28, 2.45, 0.04]], 0.075, 0xdc2626);
        const b2 = this.makeTube([[0.15, 2.04, -0.14], [0.18, 2.52, -0.14]], 0.06, 0xdc2626);
        const b3 = this.makeTube([[0.32, 1.96, -0.28], [0.48, 2.48, -0.28]], 0.06, 0xdc2626);

        // 4 Pulmonary Veins entering Left Atrium
        const pv1 = this.makeTube([[-0.82, 0.92, -0.62], [0.1, 0.78, -0.6]], 0.08, 0xf87171);
        const pv2 = this.makeTube([[-0.82, 0.58, -0.65], [0.1, 0.56, -0.6]], 0.08, 0xf87171);
        const pv3 = this.makeTube([[1.22, 0.95, -0.55], [0.55, 0.78, -0.58]], 0.08, 0xf87171);
        const pv4 = this.makeTube([[1.22, 0.58, -0.58], [0.55, 0.56, -0.58]], 0.08, 0xf87171);

        root.add(svc.mesh, ivc.mesh, pulmTrunk.mesh, rPulm.mesh, aorta.mesh, b1.mesh, b2.mesh, b3.mesh, pv1.mesh, pv2.mesh, pv3.mesh, pv4.mesh);
        this.registerPart(svc.mesh, "nhiphai", false, false);
        this.registerPart(ivc.mesh, "nhiphai", false, false);
        this.registerPart(pulmTrunk.mesh, "thatphai", false, false);
        this.registerPart(aorta.mesh, "thattrai", false, false);
        [pv1, pv2, pv3, pv4].forEach((p) => this.registerPart(p.mesh, "nhitrai", false, false));

        this.addFlowParticles(root, pulmTrunk.curve, 0x93c5fd, 6, 0.06, 0.35);
        this.addFlowParticles(root, aorta.curve, 0xfef08a, 7, 0.065, 0.38);

        // Systolic heartbeat animation
        this.customTick = (elapsed) => {
          const beat = 1.0 + Math.pow(Math.sin(elapsed * 3.8), 6) * 0.045;
          rv.scale.set(beat, 1.0 + (beat - 1.0) * 0.5, beat);
          lv.scale.set(beat, 1.0 + (beat - 1.0) * 0.5, beat);
        };

        this.addPin("nhiphai", [-1.12, 0.68, 0.42], "Tâm nhĩ phải (Hố bầu dục)");
        this.addPin("nhitrai", [0.62, 0.92, -0.82], "Tâm nhĩ trái (Đáy tim)");
        this.addPin("thatphai", [-0.62, -0.52, 0.82], "Tâm thất phải & Van 3 lá");
        this.addPin("thattrai", [0.88, -1.08, 0.32], "Đỉnh tim (Thất trái KLS 5)");
        this.addPin("vach", [0.18, 0.02, 0.65], "Vách gian thất");
      }
    },

    // --------------------------------------------------------------------
    // 5. TIM – MẠCH VÀNH & HỆ DẪN TRUYỀN TỰ ĐỘNG 3D
    // --------------------------------------------------------------------
    5: {
      defaultCamera: [0.2, 0.3, 6.8],
      views: {
        front: [0.1, 0.2, 6.0],
        back: [0.0, 0.1, -6.0],
        top: [0.0, 5.5, 1.6],
        side: [5.4, 0.2, 2.0]
      },
      legend: [
        { color: "#ef4444", text: "ĐMV Phải (RCA) & ĐMV Trái (LAD, LCx)" },
        { color: "#3b82f6", text: "Xoang TM vành, TM tim lớn & giữa" },
        { color: "#facc15", text: "Hệ dẫn truyền: Nút Xoang → AV → His → Purkinje" }
      ],
      parts: {
        dmvp: {
          title: "1. Động mạch Vành phải (RCA) & Nhánh Bờ phải / Gian thất sau",
          lat: "A. coronaria dextra • R. marginalis dexter & IVP",
          desc: "Từ xoang ĐMC phải, đi trong rãnh vành phải → xuống mặt hoành đến 'giao điểm' (crux). Cho nhánh nút xoang nhĩ, nhánh bờ phải (bờ sắc), nhánh nút nhĩ–thất, nhánh gian thất sau (1/3 sau vách gian thất).",
          pearl: "Tắc ĐMV phải gây thiếu máu mặt hoành tim, nhánh bờ phải và nút nhĩ thất (block nhĩ–thất)."
        },
        lad: {
          title: "2. ĐM Gian thất trước (LAD) – Thân chung ĐMV Trái",
          lat: "A. interventricularis anterior • Rr. diagonales & septales",
          desc: "Đi cùng TM tim lớn trong rãnh gian thất trước, vòng qua mỏm tim lên mặt hoành 1–2 cm. Cho các nhánh chéo (thành trước thất trái) và các nhánh vách trước (2/3 trước vách gian thất).",
          pearl: "ĐM gian thất trước cấp máu cho MỎM TIM, thành trước thất trái và 2/3 trước vách gian thất!"
        },
        lcx: {
          title: "3. Động mạch Mũ (LCx) & Nhánh Bờ trái (Bờ tù)",
          lat: "R. circumflexus • R. marginalis sinister",
          desc: "Đi trong rãnh vành trái sang mặt phổi & mặt hoành thất trái, cho nhánh bờ trái (bờ tù). Trong trường hợp ưu thế trái, ĐM mũ đi tới giao điểm cho nhánh gian thất sau.",
          pearl: "ĐM vành KHÔNG có sự thông nối dồi dào → tắc cấp gây nhồi máu cơ tim."
        },
        xoangvanh: {
          title: "4. Xoang Tĩnh mạch vành & Các Tĩnh mạch Tim",
          lat: "Sinus coronarius • V. cardiaca magna / media",
          desc: "Nằm ở rãnh vành mặt hoành (dài 2–3 cm) đổ về nhĩ phải. Nhận TM tim lớn (rãnh gian thất trước), TM tim giữa (rãnh gian thất sau), TM tim nhỏ, TM sau thất trái, TM chếch nhĩ trái.",
          pearl: "Các TM tim trước và TM tim cực nhỏ đổ TRỰC TIẾP vào tâm nhĩ phải, KHÔNG qua xoang vành!"
        },
        dantruyen: {
          title: "5. Hệ Dẫn truyền Tự động (Nút SA → Nút AV → Bó His → Purkinje)",
          lat: "Nodus sinuatrialis → Nodus AV → Fasciculus AV",
          desc: "Nút xoang nhĩ (thành phải nhĩ phải bên phải lỗ TMCT) → Nút nhĩ thất (thành trong nhĩ phải giữa lá trong van 3 lá & lỗ xoang vành) → Bó His qua phần màng vách gian thất → Trụ P/T → Sợi Purkinje.",
          pearl: "ĐMV phải thường cấp máu cho CẢ nút xoang nhĩ và nút nhĩ thất."
        }
      },
      build(root) {
        // Translucent heart silhouette so coronaries AND conduction system pop vividly!
        const heartBody = this.makeOrgan(1.18, 1.32, 0.92, 0x9f1239, {
          pos: [0.05, -0.15, 0.0],
          rot: [0.15, 0.0, -0.42],
          transparent: true,
          opacity: 0.34,
          depthWrite: false,
          deform: (x, y, z) => {
            const tap = y < 0 ? Math.max(0.36, 1.0 + y * 0.42) : 1.0;
            return [x * tap, y, z * tap];
          }
        });
        root.add(heartBody);
        this.registerPart(heartBody, "lad", true, false);

        // Aortic Root base
        const aoRoot = this.makeTube([[0.02, 0.72, 0.05], [-0.04, 1.48, 0.05]], 0.21, 0xf87171, { transparent: true, opacity: 0.55 });
        root.add(aoRoot.mesh);

        // Right Coronary Artery (RCA) -> Marginal + PDA (crux -> posterior IV)
        const rca = this.makeTube([
          [-0.14, 0.85, 0.15], [-0.68, 0.55, 0.45], [-1.05, 0.12, 0.32], [-0.95, -0.35, -0.45], [-0.25, -0.32, -0.78], [0.22, -0.95, -0.58], [0.68, -1.35, -0.18]
        ], 0.056, 0xef4444);
        const rMarginal = this.makeTube([
          [-1.05, 0.12, 0.32], [-0.62, -0.58, 0.58], [0.15, -1.15, 0.36]
        ], 0.038, 0xef4444);
        root.add(rca.mesh, rMarginal.mesh);
        this.registerPart(rca.mesh, "dmvp", false, false);
        this.registerPart(rMarginal.mesh, "dmvp", false, false);
        this.addFlowParticles(root, rca.curve, 0xfef08a, 7, 0.05, 0.25);

        // Left Main -> LAD + Diagonal + Septal Perforators
        const lmca = this.makeTube([[0.15, 0.85, 0.12], [0.35, 0.78, 0.38]], 0.068, 0xdc2626);
        const lad = this.makeTube([
          [0.35, 0.78, 0.38], [0.18, 0.28, 0.78], [0.22, -0.45, 0.72], [0.58, -1.12, 0.32], [0.85, -1.42, 0.05], [0.65, -1.25, -0.25]
        ], 0.056, 0xdc2626);
        const diag = this.makeTube([[0.18, 0.05, 0.78], [0.65, -0.25, 0.65], [0.92, -0.72, 0.38]], 0.038, 0xdc2626);
        root.add(lmca.mesh, lad.mesh, diag.mesh);
        this.registerPart(lmca.mesh, "lad", false, false);
        this.registerPart(lad.mesh, "lad", false, false);
        this.registerPart(diag.mesh, "lad", false, false);
        this.addFlowParticles(root, lad.curve, 0xfef08a, 7, 0.05, 0.28);

        // Circumflex (LCx) + Left Marginal
        const lcx = this.makeTube([
          [0.35, 0.78, 0.38], [0.92, 0.55, 0.18], [1.12, 0.18, -0.35], [0.45, -0.15, -0.76]
        ], 0.05, 0xf43f5e);
        const lMarg = this.makeTube([[1.04, 0.38, -0.08], [1.18, -0.32, 0.08], [0.95, -0.95, 0.12]], 0.038, 0xf43f5e);
        root.add(lcx.mesh, lMarg.mesh);
        this.registerPart(lcx.mesh, "lcx", false, false);
        this.registerPart(lMarg.mesh, "lcx", false, false);

        // Coronary Sinus + Great Cardiac Vein + Middle Cardiac Vein (blue)
        const gcv = this.makeTube([
          [0.72, -1.32, 0.12], [0.28, -0.35, 0.74], [0.32, 0.42, 0.68], [0.95, 0.38, 0.08], [0.78, -0.05, -0.68], [-0.15, -0.18, -0.82], [-0.62, 0.15, -0.58]
        ], 0.058, 0x3b82f6);
        const mcv = this.makeTube([
          [0.58, -1.25, -0.24], [0.12, -0.78, -0.62], [-0.15, -0.18, -0.82]
        ], 0.044, 0x60a5fa);
        root.add(gcv.mesh, mcv.mesh);
        this.registerPart(gcv.mesh, "xoangvanh", false, false);
        this.registerPart(mcv.mesh, "xoangvanh", false, false);

        // Electrical Conduction System (Bright Glowing Gold inside!)
        const saNode = this.makeOrgan(0.14, 0.14, 0.14, 0xfacc15, { pos: [-0.72, 0.82, 0.05] });
        saNode.material.emissive = new THREE.Color(0xfacc15);
        saNode.material.emissiveIntensity = 0.85;
        const avNode = this.makeOrgan(0.13, 0.11, 0.11, 0xfacc15, { pos: [-0.15, 0.25, -0.12] });
        avNode.material.emissive = new THREE.Color(0xfacc15);
        avNode.material.emissiveIntensity = 0.75;

        const interNodal = this.makeTube([[-0.72, 0.82, 0.05], [-0.45, 0.55, 0.0], [-0.15, 0.25, -0.12]], 0.028, 0xfde047);
        const hisRight = this.makeTube([[-0.15, 0.25, -0.12], [-0.08, -0.05, 0.02], [-0.18, -0.62, 0.18], [-0.52, -0.95, 0.28]], 0.03, 0xfde047);
        const hisLeft = this.makeTube([[-0.08, -0.05, 0.02], [0.18, -0.58, 0.05], [0.68, -1.18, 0.1]], 0.03, 0xfde047);
        root.add(saNode, avNode, interNodal.mesh, hisRight.mesh, hisLeft.mesh);
        [saNode, avNode, interNodal.mesh, hisRight.mesh, hisLeft.mesh].forEach((m) => this.registerPart(m, "dantruyen", false, true));

        this.addFlowParticles(root, interNodal.curve, 0xffffff, 3, 0.052, 0.65);
        this.addFlowParticles(root, hisLeft.curve, 0xffffff, 4, 0.052, 0.65);

        this.customTick = (elapsed) => {
          const pulse = 0.5 + 0.5 * Math.sin(elapsed * 5.0);
          saNode.material.emissiveIntensity = 0.4 + pulse * 1.1;
          avNode.material.emissiveIntensity = 0.4 + (1 - pulse) * 0.9;
        };

        this.addPin("dmvp", [-1.08, 0.12, 0.42], "ĐMV Phải & Nhánh bờ phải");
        this.addPin("lad", [0.24, -0.35, 0.85], "ĐM Gian thất trước (LAD)");
        this.addPin("lcx", [1.18, 0.28, -0.25], "ĐM Mũ (LCx) & Bờ trái");
        this.addPin("xoangvanh", [-0.18, -0.18, -0.95], "Xoang TM vành (mặt hoành)");
        this.addPin("dantruyen", [-0.72, 0.95, 0.22], "Nút xoang → Nút AV → Bó His");
      }
    },

    // --------------------------------------------------------------------
    // 6. ĐỘNG MẠCH CHỦ BỤNG & CÁC NHÁNH TẠNG – THẬN – CHẬU 3D
    // --------------------------------------------------------------------
    6: {
      defaultCamera: [0.2, 0.2, 7.4],
      views: {
        front: [0.0, 0.1, 6.5],
        back: [0.0, 0.1, -6.5],
        top: [0.0, 5.8, 2.0],
        side: [5.8, 0.2, 2.0]
      },
      legend: [
        { color: "#dc2626", text: "ĐMC bụng (T12–L4) & Chậu chung (L5–S1)" },
        { color: "#f97316", text: "3 Nhánh bụng: Thân tạng, MTTT, MTTD" },
        { color: "#eab308", text: "Nhánh đôi: Thận, Sinh dục & Cột sống T12–L4" }
      ],
      parts: {
        dmcb: {
          title: "1. Động mạch Chủ bụng (T12–L1 đến Bờ trái L4)",
          lat: "Aorta abdominalis • L4 Bifurcation",
          desc: "Bắt đầu tại lỗ ĐMC cơ hoành (bờ dưới T12 / T12–L1), đi hơi lệch trái đường giữa trước cột sống đến bờ trái L4 chia 2 ĐM chậu chung và 1 ĐM cùng giữa.",
          pearl: "4 nhóm nhánh: Nhánh bụng (3 nhánh lẻ), Nhánh bên (đôi: hoành dưới, thượng thận giữa, thận, sinh dục), Nhánh lưng (thắt lưng), Nhánh tận."
        },
        thantang: {
          title: "2. Động mạch Thân tạng (T12–L1)",
          lat: "Truncus coeliacus • Vị trái – Gan chung – Lách",
          desc: "Dài ~1 cm tách mặt trước ĐMC ngay dưới cơ hoành. Chia 3 nhánh: ĐM vị trái, ĐM gan chung (→ ĐM gan riêng + ĐM vị tá tràng) và ĐM lách (lớn nhất).",
          pearl: "BẪY: ĐM vị phải tách từ ĐM gan riêng; ĐM vị mạc nối phải từ ĐM vị tá tràng; ĐM túi mật từ ĐM gan phải."
        },
        mttt: {
          title: "3. ĐM Mạc treo tràng trên (L1 – Kẹp D3 & TM Thận trái)",
          lat: "A. mesenterica superior • Von Rokitansky & Nutcracker",
          desc: "Tách dưới thân tạng ~1 cm (ngang L1). Đi sau cổ tụy (trong tứ giác tĩnh mạch), bắt chéo trước mỏm móc tụy và D3 tá tràng → vào rễ mạc treo cấp máu ruột non & kết tràng phải (2/3 phải kết tràng ngang).",
          pearl: "Cho ĐM tá tụy dưới, 12–15 nhánh hỗng hồi tràng, ĐM hồi kết tràng (→ ĐM ruột thừa), ĐM kết tràng phải & ĐM kết tràng giữa."
        },
        mttd: {
          title: "4. ĐM Mạc treo tràng dưới (L3 – Cung Riolan)",
          lat: "A. mesenterica inferior • Riolan / Drummond",
          desc: "Tách ngang L3 (trên chỗ chia đôi ĐMC 4–5 cm). Cấp máu 1/3 trái kết tràng ngang, kết tràng xuống, sigma và trực tràng trên (nhánh tận ngang S3).",
          pearl: "Nhánh lên ĐM kết tràng trái nối với ĐM kết tràng giữa (MTTT) tạo cung mạch Riolan (ĐM bờ Drummond)."
        },
        than: {
          title: "5. ĐM Thận (L1) & ĐM Sinh dục (Tinh hoàn / Buồng trứng)",
          lat: "A. renalis • A. testicularis / ovarica",
          desc: "ĐM thận tách ngang L1 dưới ĐM MTTT; ĐM thận phải DÀI HƠN và đi SAU TM chủ dưới. ĐM sinh dục tách mặt trước dưới ĐM thận, bắt chéo trước niệu quản.",
          pearl: "Cắt ĐM tinh hoàn ở bụng còn nhánh ĐM cơ bìu (từ thượng vị dưới) bù; tổn thương ở thừng tinh dễ hoại tử tinh hoàn."
        },
        chau: {
          title: "6. ĐM Chậu chung (L4) → Chậu trong & Chậu ngoài (L5–S1)",
          lat: "A. iliaca communis → interna & externa",
          desc: "Mỗi ĐM chậu chung đến đĩa L5–S1 chia ĐM chậu trong (8 nhánh thân trước + 3 nhánh thân sau) và ĐM chậu ngoài (qua dây chằng bẹn thành ĐM đùi; cho ĐM thượng vị dưới & mũ chậu sâu).",
          pearl: "ĐM tử cung (thân trước chậu trong) bắt chéo trước trên niệu quản cách cổ tử cung 1,5 cm; ĐM bịt qua ống bịt."
        }
      },
      build(root) {
        // Vertebral bodies T12 to L5 reference column in background
        const levels = ["T12", "L1", "L2", "L3", "L4", "L5"];
        levels.forEach((lv, i) => {
          const y = 2.0 - i * 0.72;
          const vMesh = new THREE.Mesh(
            new THREE.CylinderGeometry(0.42, 0.44, 0.52, 20),
            new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7, transparent: true, opacity: 0.48 })
          );
          vMesh.position.set(0.0, y, -0.62);
          root.add(vMesh);
        });

        // Abdominal Aorta (T12 -> L4) slightly left of midline (+X in patient-facing view = patient's left!)
        const ao = this.makeTube([[0.05, 2.25, -0.05], [0.1, 1.35, 0.0], [0.12, 0.25, 0.02], [0.12, -0.88, 0.0]], 0.16, 0xdc2626);
        const medianSacral = this.makeTube([[0.12, -0.88, 0.0], [0.06, -1.75, -0.25]], 0.035, 0xdc2626);
        root.add(ao.mesh, medianSacral.mesh);
        this.registerPart(ao.mesh, "dmcb", false, false);
        this.addFlowParticles(root, ao.curve, 0xfef08a, 7, 0.06, 0.35);

        // Iliac Bifurcation at L4 -> Common Iliacs -> External & Internal Iliacs at L5-S1
        const rComIl = this.makeTube([[0.12, -0.88, 0.0], [-0.45, -1.55, -0.02]], 0.11, 0xdc2626);
        const lComIl = this.makeTube([[0.12, -0.88, 0.0], [0.68, -1.55, -0.02]], 0.11, 0xdc2626);
        const rExt = this.makeTube([[-0.45, -1.55, -0.02], [-1.05, -2.28, 0.18]], 0.085, 0xef4444);
        const rInt = this.makeTube([[-0.45, -1.55, -0.02], [-0.42, -2.25, -0.28]], 0.07, 0xf97316);
        const lExt = this.makeTube([[0.68, -1.55, -0.02], [1.28, -2.28, 0.18]], 0.085, 0xef4444);
        const lInt = this.makeTube([[0.68, -1.55, -0.02], [0.62, -2.25, -0.28]], 0.07, 0xf97316);
        root.add(rComIl.mesh, lComIl.mesh, rExt.mesh, rInt.mesh, lExt.mesh, lInt.mesh);
        [rComIl, lComIl, rExt, rInt, lExt, lInt].forEach((m) => this.registerPart(m.mesh, "chau", false, false));

        // 1) Celiac Trunk (T12-L1) + 3 branches
        const celiac = this.makeTube([[0.1, 1.72, 0.12], [0.1, 1.72, 0.52]], 0.08, 0xf97316);
        const lGastric = this.makeTube([[0.1, 1.72, 0.52], [0.45, 2.25, 0.58]], 0.045, 0xf97316);
        const cHep = this.makeTube([[0.1, 1.72, 0.52], [-0.65, 1.68, 0.55], [-0.95, 2.05, 0.5]], 0.055, 0xf97316);
        const splenic = this.makeTube([[0.1, 1.72, 0.52], [0.68, 1.78, 0.45], [1.05, 1.68, 0.38], [1.45, 1.76, 0.25]], 0.06, 0xf97316);
        root.add(celiac.mesh, lGastric.mesh, cHep.mesh, splenic.mesh);
        [celiac, lGastric, cHep, splenic].forEach((m) => this.registerPart(m.mesh, "thantang", false, false));

        // 2) Superior Mesenteric Artery (L1) + intestinal & right colic branches
        const sma = this.makeTube([[0.11, 1.32, 0.14], [0.14, 1.05, 0.58], [0.18, 0.35, 0.65], [-0.15, -0.45, 0.55]], 0.072, 0xf97316);
        const ileocolic = this.makeTube([[0.14, 0.52, 0.62], [-0.45, 0.12, 0.55], [-0.88, -0.35, 0.42]], 0.042, 0xfb923c);
        const midColic = this.makeTube([[0.15, 0.88, 0.62], [-0.25, 0.92, 0.85], [0.35, 0.85, 0.88]], 0.042, 0xfb923c);
        root.add(sma.mesh, ileocolic.mesh, midColic.mesh);
        [sma, ileocolic, midColic].forEach((m) => this.registerPart(m.mesh, "mttt", false, false));
        this.addFlowParticles(root, sma.curve, 0xfef08a, 5, 0.052, 0.32);

        // 3) Inferior Mesenteric Artery (L3) + Left Colic (Riolan) + Superior Rectal
        const ima = this.makeTube([[0.12, -0.15, 0.12], [0.35, -0.32, 0.48], [0.55, -0.95, 0.42], [0.22, -1.78, 0.18]], 0.056, 0xf97316);
        const lColic = this.makeTube([[0.38, -0.38, 0.48], [0.95, 0.15, 0.55], [0.68, 0.78, 0.78], [0.35, 0.85, 0.88]], 0.038, 0xfacc15); // Riolan arc connecting to Mid Colic!
        root.add(ima.mesh, lColic.mesh);
        [ima, lColic].forEach((m) => this.registerPart(m.mesh, "mttd", false, false));

        // 4) Renal Arteries (L1) + Kidneys translucent + Gonadal Arteries (L2)
        const rRenal = this.makeTube([[-0.04, 1.18, -0.02], [-0.85, 1.15, -0.22], [-1.35, 1.12, -0.32]], 0.06, 0xeab308);
        const lRenal = this.makeTube([[0.26, 1.22, -0.02], [0.85, 1.25, -0.18], [1.28, 1.28, -0.28]], 0.06, 0xeab308);
        const rKid = this.makeOrgan(0.36, 0.56, 0.25, 0x9f1239, { pos: [-1.45, 1.08, -0.35], transparent: true, opacity: 0.6 });
        const lKid = this.makeOrgan(0.36, 0.56, 0.25, 0x9f1239, { pos: [1.38, 1.25, -0.32], transparent: true, opacity: 0.6 });
        const rGon = this.makeTube([[-0.02, 0.68, 0.1], [-0.52, -0.25, 0.22], [-0.78, -1.45, 0.22]], 0.028, 0xfde047);
        const lGon = this.makeTube([[0.22, 0.72, 0.1], [0.72, -0.22, 0.22], [0.95, -1.45, 0.22]], 0.028, 0xfde047);
        root.add(rRenal.mesh, lRenal.mesh, rKid, lKid, rGon.mesh, lGon.mesh);
        [rRenal, lRenal, rGon, lGon].forEach((m) => this.registerPart(m.mesh, "than", false, false));

        this.addPin("thantang", [0.1, 1.92, 0.65], "ĐM Thân tạng (T12–L1)");
        this.addPin("mttt", [0.18, 0.85, 0.75], "ĐM MTTT (L1)");
        this.addPin("than", [-1.15, 1.25, -0.15], "ĐM Thận (Phải dài hơn)");
        this.addPin("mttd", [0.58, -0.35, 0.65], "ĐM MTTD (L3) & Cung Riolan");
        this.addPin("dmcb", [0.12, -0.88, 0.25], "Chia đôi ĐMC (L4)");
        this.addPin("chau", [-0.72, -1.85, 0.22], "ĐM Chậu chung (L5–S1)");
      }
    },

    // --------------------------------------------------------------------
    // 7. TĨNH MẠCH CHỦ DƯỚI & HỆ TĨNH MẠCH CỬA – 3 VÒNG NỐI CỬA CHỦ 3D
    // --------------------------------------------------------------------
    7: {
      defaultCamera: [0.1, 0.2, 7.2],
      views: {
        front: [0.0, 0.2, 6.4],
        back: [0.0, 0.2, -6.4],
        top: [0.0, 5.8, 1.8],
        side: [-5.6, 0.3, 2.2]
      },
      legend: [
        { color: "#2563eb", text: "Tĩnh mạch Chủ dưới (TMCD) & TM Thận" },
        { color: "#7c3aed", text: "Hệ Tĩnh mạch Cửa (TM Lách + MTTT + MTTD)" },
        { color: "#f59e0b", text: "3 Vòng nối Cửa–Chủ (Thực quản, Rốn, Trực tràng)" }
      ],
      parts: {
        tmcd: {
          title: "1. Tĩnh mạch Chủ dưới (TMCD – Sườn phải L4)",
          lat: "V. cava inferior • L4 Confluence",
          desc: "Hợp lưu từ 2 TM chậu chung ở sườn phải L4, đi bên phải cột sống và ĐMC bụng → qua rãnh mặt sau gan → lỗ TMCD cơ hoành → tâm nhĩ phải. Nhận 3 TM gan, các TM thận, TM hoành dưới, TM thắt lưng, TM sinh dục.",
          pearl: "TM thận trái dài hơn TM thận phải, bắt chéo trước ĐMC bụng dưới ĐM MTTT (nguy cơ Hội chứng Nutcracker)."
        },
        tmcua: {
          title: "2. Hệ Tĩnh mạch Cửa (TM Lách + TM MTTT)",
          lat: "V. portae hepatis • L1 sau cổ tụy",
          desc: "Hợp lưu của TM MTTT và TM lách ở trước TMCD, sau cổ tụy ngang L1 (TM lách nhận thêm TM MTTD). Vào cửa gan chia 2 nhánh P/T, lọc qua xoang gan rồi tập trung về 3 TM gan → TMCD.",
          pearl: "Tăng áp lực TM cửa làm giãn TM cửa, TM lách (lách to), TM MTTT, TM MTTD; KHÔNG làm giãn 3 TM gan!"
        },
        tugiac: {
          title: "3. Tứ giác Tĩnh mạch (Vùng sau tụy quanh ĐM MTTT)",
          lat: "TM Lách • TM Thận trái • TMCD • TM MTTD",
          desc: "4 cạnh: Trên = TM lách; Dưới = TM thận trái; Phải = TM chủ dưới; Trái = TM mạc treo tràng dưới. Bao quanh đoạn sau tụy của ĐM MTTT.",
          pearl: "CÂU BẪY: Tĩnh mạch CỬA KHÔNG nằm trong 4 cạnh của tứ giác tĩnh mạch này!"
        },
        noithucquan: {
          title: "4. Vòng nối Thực quản (TM Vị trái ↔ Hệ TM Đơn)",
          lat: "Anastomosis oesophagealis → Giãn TM thực quản",
          desc: "TM vị trái (đổ trực tiếp TM cửa) thông nối tại lớp dưới niêm mạc 1/3 dưới thực quản với các TM thực quản (đổ về hệ TM đơn → TM chủ trên).",
          pearl: "Là vòng nối nguy hiểm nhất trong xơ gan: vỡ búi giãn TM thực quản gây nôn ra máu ồ ạt!"
        },
        noitructrang: {
          title: "5. Vòng nối Trực tràng (TM Trực tràng trên ↔ Giữa/Dưới)",
          lat: "Anastomosis rectalis → Trĩ nội/ngoại",
          desc: "TM trực tràng trên (về TM MTTD → TM lách → TM cửa) thông nối với TM trực tràng giữa & dưới (về TM chậu trong → TM chủ dưới).",
          pearl: "TM trực tràng trên thuộc hệ CỬA (giãn khi xơ gan); TM trực tràng dưới thuộc hệ CHỦ."
        },
        noiron: {
          title: "6. Vòng nối Quanh rốn (TM Cạnh rốn ↔ TM Thành bụng)",
          lat: "Caput medusae • Tuần hoàn bàng hệ bụng",
          desc: "Các TM cạnh rốn chạy dọc dây chằng tròn gan nối vào nhánh trái TM cửa, thông với các TM thượng vị nông/trên/dưới ở thành bụng trước (hệ chủ).",
          pearl: "Khi tăng áp cửa, máu chảy ngược tạo chùm tĩnh mạch nổi ngoằn ngoèo quanh rốn ('hình đầu sứa')."
        }
      },
      build(root) {
        // Translucent Liver silhouette top-left (patient's right!)
        const liverGhost = this.makeOrgan(1.15, 0.72, 0.65, 0x991b1b, { pos: [-0.82, 1.35, -0.05], transparent: true, opacity: 0.34, depthWrite: false });
        root.add(liverGhost);

        // IVC (on anatomical right = -X in patient-facing view) from L4 up through liver to RA
        const ivc = this.makeTube([[-0.38, -1.42, -0.35], [-0.38, 0.15, -0.35], [-0.38, 1.55, -0.38], [-0.38, 2.22, -0.35]], 0.16, 0x2563eb);
        const rComIlV = this.makeTube([[-0.38, -1.42, -0.35], [-0.95, -2.15, -0.25]], 0.11, 0x2563eb);
        const lComIlV = this.makeTube([[-0.38, -1.42, -0.35], [0.42, -2.15, -0.25]], 0.11, 0x2563eb);
        const rRenalV = this.makeTube([[-0.38, 0.45, -0.35], [-1.32, 0.48, -0.38]], 0.068, 0x3b82f6);
        const lRenalV = this.makeTube([[-0.38, 0.52, -0.32], [0.22, 0.54, 0.05], [1.28, 0.62, -0.28]], 0.068, 0x3b82f6); // crosses in front of aorta!
        const hv1 = this.makeTube([[-1.25, 1.48, 0.05], [-0.42, 1.68, -0.34]], 0.055, 0x38bdf8);
        const hv2 = this.makeTube([[-0.35, 1.32, 0.25], [-0.38, 1.68, -0.34]], 0.055, 0x38bdf8);
        root.add(ivc.mesh, rComIlV.mesh, lComIlV.mesh, rRenalV.mesh, lRenalV.mesh, hv1.mesh, hv2.mesh);
        [ivc, rComIlV, lComIlV, rRenalV, hv1, hv2].forEach((m) => this.registerPart(m.mesh, "tmcd", false, false));
        this.registerPart(lRenalV.mesh, "tugiac", false, false);
        this.addFlowParticles(root, ivc.curve, 0x93c5fd, 7, 0.06, 0.35);

        // Portal Vein System (Purple)
        const smv = this.makeTube([[0.05, -0.95, 0.35], [-0.08, 0.05, 0.22], [-0.15, 0.65, 0.12]], 0.085, 0x7c3aed);
        const splV = this.makeTube([[1.52, 1.15, 0.08], [0.75, 0.92, 0.12], [-0.15, 0.65, 0.12]], 0.078, 0x7c3aed); // top of vein quad!
        const imv = this.makeTube([[0.58, -1.15, 0.28], [0.58, 0.15, 0.22], [0.48, 0.85, 0.15]], 0.06, 0x8b5cf6); // left of vein quad!
        const pv = this.makeTube([[-0.15, 0.65, 0.12], [-0.48, 1.12, 0.08], [-0.72, 1.35, -0.02]], 0.11, 0x9333ea);
        root.add(smv.mesh, splV.mesh, imv.mesh, pv.mesh);
        [smv, pv].forEach((m) => this.registerPart(m.mesh, "tmcua", false, false));
        [splV, imv].forEach((m) => this.registerPart(m.mesh, "tugiac", false, false));
        this.addFlowParticles(root, pv.curve, 0xe9d5ff, 5, 0.06, 0.3);

        // Shunt 1: Esophageal varices (Left gastric V -> Azygos -> SVC)
        const esophShunt = this.makeTube([[-0.35, 0.95, 0.15], [0.22, 1.65, 0.28], [0.25, 2.35, 0.15]], 0.052, 0xf59e0b);
        root.add(esophShunt.mesh);
        this.registerPart(esophShunt.mesh, "noithucquan", false, false);
        this.addFlowParticles(root, esophShunt.curve, 0xfef08a, 5, 0.055, 0.35);

        // Shunt 2: Rectal / Hemorrhoidal plexus (Sup Rectal V <-> Mid/Inf Rectal V)
        const rectShunt = this.makeTube([[0.58, -1.15, 0.28], [0.32, -1.92, 0.22], [0.42, -2.15, -0.25]], 0.048, 0xf59e0b);
        root.add(rectShunt.mesh);
        this.registerPart(rectShunt.mesh, "noitructrang", false, false);
        this.addFlowParticles(root, rectShunt.curve, 0xfef08a, 4, 0.052, 0.32);

        // Shunt 3: Umbilical / Caput medusae (Paraumbilical along round ligament -> Anterior abdominal wall)
        const umbShunt = this.makeTube([[-0.55, 1.25, 0.05], [-0.15, 0.55, 0.65], [0.02, -0.25, 0.85]], 0.046, 0xf59e0b);
        const caput1 = this.makeTube([[0.02, -0.25, 0.85], [0.45, -0.05, 0.85]], 0.032, 0xfbbf24);
        const caput2 = this.makeTube([[0.02, -0.25, 0.85], [-0.45, -0.45, 0.85]], 0.032, 0xfbbf24);
        const caput3 = this.makeTube([[0.02, -0.25, 0.85], [0.35, -0.68, 0.85]], 0.032, 0xfbbf24);
        root.add(umbShunt.mesh, caput1.mesh, caput2.mesh, caput3.mesh);
        [umbShunt, caput1, caput2, caput3].forEach((m) => this.registerPart(m.mesh, "noiron", false, false));
        this.addFlowParticles(root, umbShunt.curve, 0xfef08a, 4, 0.052, 0.32);

        this.addPin("tmcua", [-0.42, 1.05, 0.35], "Tĩnh mạch Cửa (L1)");
        this.addPin("tmcd", [-0.42, -0.65, -0.15], "TM Chủ dưới (Sườn phải L4)");
        this.addPin("tugiac", [0.48, 0.55, 0.35], "Tứ giác Tĩnh mạch");
        this.addPin("noithucquan", [0.25, 2.15, 0.35], "1. Vòng nối Thực quản");
        this.addPin("noiron", [0.05, -0.25, 0.95], "2. Vòng nối Quanh rốn (Đầu sứa)");
        this.addPin("noitructrang", [0.38, -1.92, 0.35], "3. Vòng nối Trực tràng (Trĩ)");
      }
    }
  },

  // ========================================================================
  // RENDER & INTERACTION LIFECYCLE
  // ========================================================================
  render(lessonId, container) {
    this.dispose();
    if (!container) return;

    const spec = this.specs[lessonId];
    if (!spec) {
      container.innerHTML = `<div class="callout">Mô hình 3D đang được chuẩn bị...</div>`;
      return;
    }

    this.currentLessonId = lessonId;
    this.xrayMode = false;
    this.animateFlow = true;
    this.autoRotate = false;
    this.showLabels = true;
    const partKeys = Object.keys(spec.parts);
    this.selectedKey = partKeys[0];

    const chipsHtml = partKeys.map((k, idx) => `
      <button type="button" class="struct-chip ${idx === 0 ? "active" : ""}" id="chip3d_${k}" onclick="Models3D.selectPart('${k}')">
        <span class="chip-dot" style="background:${idx % 2 === 0 ? "var(--primary)" : "var(--accent)"};"></span>
        <span>${spec.parts[k].title.replace(/^\d+\.\s*/, "")}</span>
      </button>
    `).join("");

    const legendHtml = (spec.legend || []).map((l) => `
      <span class="legend-item"><span class="legend-swatch" style="background:${l.color};"></span>${l.text}</span>
    `).join("");

    container.innerHTML = `
      <div class="model3d-layout">
        <div>
          <div class="model3d-toolbar">
            <div class="model3d-hint">🖱️ Kéo để xoay 360° • Cuộn để phóng to • Chạm ghim/mô hình để xem mốc thi</div>
            <div class="model3d-hud-btns">
              <button type="button" class="hud-btn" id="btn3dXray" onclick="Models3D.toggleXray()">🔍 X-Quang</button>
              <button type="button" class="hud-btn active" id="btn3dFlow" onclick="Models3D.toggleFlow()">💓 Dòng chảy</button>
              <button type="button" class="hud-btn" id="btn3dAuto" onclick="Models3D.toggleAutoRotate()">🔄 Tự xoay</button>
              <button type="button" class="hud-btn active" id="btn3dLabels" onclick="Models3D.toggleLabels()">🏷️ Nhãn</button>
            </div>
          </div>
          <div class="model3d-viewport-wrap" id="m3dWrap">
            <canvas class="model3d-canvas" id="m3dCanvas"></canvas>
            <div class="model3d-labels-layer" id="m3dLabels"></div>
          </div>
          <div class="model3d-legend">${legendHtml}</div>
        </div>

        <div class="model3d-side">
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:6px;">📐 GÓC NHÌN NHANH:</div>
            <div class="model3d-views-row">
              <button type="button" class="pill-btn" onclick="Models3D.setView('front')">Mặt trước</button>
              <button type="button" class="pill-btn" onclick="Models3D.setView('back')">Mặt sau</button>
              <button type="button" class="pill-btn" onclick="Models3D.setView('top')">Từ trên / Hoành</button>
              <button type="button" class="pill-btn" onclick="Models3D.setView('side')">Nghiêng</button>
            </div>
          </div>

          <div>
            <div style="font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:6px;">📍 CHỌN CẤU TRÚC ĐỂ CHIẾU SÁNG TRÊN 3D:</div>
            <div class="model3d-chips">${chipsHtml}</div>
          </div>

          <div class="model3d-inspector" id="m3dInspector">
            <!-- Filled by updateInspector -->
          </div>
        </div>
      </div>
    `;

    this.initScene(spec);
    this.selectPart(this.selectedKey);
  },

  initScene(spec) {
    const wrap = document.getElementById("m3dWrap");
    const canvas = document.getElementById("m3dCanvas");
    if (!wrap || !canvas || typeof THREE === "undefined") {
      if (wrap) wrap.innerHTML = `<div style="padding:24px;color:#fff;">⚠️ Không tải được bộ dựng 3D WebGL. Hãy xem Sơ đồ Atlas tương tác bên dưới.</div>`;
      return;
    }

    try {
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (e) {
      wrap.innerHTML = `<div style="padding:24px;color:#f8fafc;">⚠️ Trình duyệt/Thiết bị này chưa bật WebGL 3D. Hãy sử dụng Sơ đồ Minh họa &amp; Phòng Thực hành bên dưới.</div>`;
      return;
    }

    const w = wrap.clientWidth || 640;
    const h = wrap.clientHeight || 420;
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    const camPos = spec.defaultCamera || [0.2, 0.4, 6.2];
    this.camera.position.set(camPos[0], camPos[1], camPos[2]);

    // Studio Medical Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.68);
    const keyLight = new THREE.DirectionalLight(0xfff1f2, 1.05);
    keyLight.position.set(4, 6, 5);
    const rimLight = new THREE.DirectionalLight(0x7dd3fc, 0.65);
    rimLight.position.set(-5, 3, -5);
    const fillLight = new THREE.PointLight(0xfde68a, 0.38);
    fillLight.position.set(0, -4, 4);
    this.scene.add(amb, keyLight, rimLight, fillLight);

    const root = new THREE.Group();
    this.scene.add(root);
    spec.build.call(this, root);

    if (THREE.OrbitControls) {
      this.controls = new THREE.OrbitControls(this.camera, canvas);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
      this.controls.minDistance = 2.6;
      this.controls.maxDistance = 11;
    }

    // Build floating 3D HTML labels
    this.renderPinDomElements(spec);

    // Click picking via raycaster
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    let downPos = { x: 0, y: 0 };
    canvas.addEventListener("pointerdown", (e) => { downPos = { x: e.clientX, y: e.clientY }; });
    canvas.addEventListener("pointerup", (e) => {
      const dist = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
      if (dist > 6 || !this.camera) return;
      const rect = canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const hits = this.raycaster.intersectObjects(this.clickableMeshes, false);
      if (hits.length > 0 && hits[0].object.userData.key) {
        this.selectPart(hits[0].object.userData.key);
      }
    });

    this.resizeHandler = () => {
      if (!wrap || !this.renderer || !this.camera) return;
      const nw = wrap.clientWidth;
      const nh = wrap.clientHeight;
      if (nw > 0 && nh > 0) {
        this.camera.aspect = nw / nh;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(nw, nh);
      }
    };
    window.addEventListener("resize", this.resizeHandler);

    this.clock = new THREE.Clock();
    const animate = () => {
      this.rafId = requestAnimationFrame(animate);
      const dt = this.clock.getDelta();
      const elapsed = this.clock.getElapsedTime();

      if (this.controls) {
        this.controls.autoRotate = this.autoRotate;
        this.controls.autoRotateSpeed = 1.6;
        this.controls.update();
      }

      if (this.animateFlow) {
        this.flowParticles.forEach((fp) => {
          fp.offset = (fp.offset + dt * fp.speed + 1.0) % 1.0;
          const pt = fp.curve.getPointAt(fp.offset);
          fp.mesh.position.copy(pt);
          fp.mesh.visible = true;
        });
        if (this.customTick) this.customTick(elapsed);
      } else {
        this.flowParticles.forEach((fp) => { fp.mesh.visible = false; });
      }

      this.updatePinPositions();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  },

  renderPinDomElements(spec) {
    const layer = document.getElementById("m3dLabels");
    if (!layer) return;
    layer.innerHTML = this.pinAnchors.map((p, idx) => `
      <button type="button" class="label3d-tag" id="pin3d_${idx}" onclick="Models3D.selectPart('${p.key}')">${p.label}</button>
    `).join("");
  },

  updatePinPositions() {
    const layer = document.getElementById("m3dLabels");
    const wrap = document.getElementById("m3dWrap");
    if (!layer || !wrap || !this.camera) return;
    layer.style.display = this.showLabels ? "block" : "none";
    if (!this.showLabels) return;

    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    const placed = [];

    this.pinAnchors.forEach((p, idx) => {
      const el = document.getElementById(`pin3d_${idx}`);
      if (!el) return;
      const v = p.pos.clone().project(this.camera);
      if (v.z > 1) {
        el.style.display = "none";
        return;
      }
      el.style.display = "block";
      const ew = el.offsetWidth || 110;
      const eh = el.offsetHeight || 22;
      let x = (v.x * 0.5 + 0.5) * w;
      let y = (-v.y * 0.5 + 0.5) * h;
      x = Math.max(ew * 0.5 + 8, Math.min(w - ew * 0.5 - 8, x));
      y = Math.max(eh + 10, Math.min(h - 10, y));
      placed.push({ el, p, x, y, ew, eh });
    });

    // Greedy 2D anti-overlap pass so floating pins stay legible
    placed.sort((a, b) => a.y - b.y);
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < placed.length; i++) {
        for (let j = i + 1; j < placed.length; j++) {
          const a = placed[i];
          const b = placed[j];
          const dx = Math.abs(a.x - b.x);
          const minDx = (a.ew + b.ew) * 0.5 + 6;
          const dy = Math.abs(a.y - b.y);
          const minDy = Math.max(a.eh, b.eh) + 5;
          if (dx < minDx && dy < minDy) {
            const push = minDy - dy;
            b.y = Math.min(h - 10, b.y + push);
          }
        }
      }
    }

    placed.forEach((item) => {
      item.el.style.left = `${item.x}px`;
      item.el.style.top = `${item.y}px`;
      item.el.classList.toggle("selected", item.p.key === this.selectedKey);
    });
  },

  selectPart(key) {
    const spec = this.specs[this.currentLessonId];
    if (!spec || !spec.parts[key]) return;
    this.selectedKey = key;

    // Update chips UI
    Object.keys(spec.parts).forEach((k) => {
      document.getElementById(`chip3d_${k}`)?.classList.toggle("active", k === key);
    });

    // Update Inspector Card
    const info = spec.parts[key];
    const insp = document.getElementById("m3dInspector");
    if (insp) {
      insp.innerHTML = `
        <div>
          <div class="inspector-title">${info.title}</div>
          <div class="inspector-lat">${info.lat}</div>
          <p class="inspector-desc" style="margin-top:8px;">${info.desc}</p>
        </div>
        <div class="inspector-pearl"><strong>🎯 Điểm thi YDS:</strong> ${info.pearl}</div>
      `;
    }

    // Highlight matching 3D meshes
    this.clickableMeshes.forEach((m) => {
      const isMatch = m.userData.key === key;
      if (m.material && m.material.emissive) {
        if (isMatch) {
          m.material.emissive.setHex(0xfde047);
          m.material.emissiveIntensity = 0.45;
        } else {
          m.material.emissive.setHex(m.userData.origEmissive || 0x000000);
          m.material.emissiveIntensity = 0.2;
        }
      }
    });
  },

  toggleXray() {
    this.xrayMode = !this.xrayMode;
    document.getElementById("btn3dXray")?.classList.toggle("active", this.xrayMode);
    this.outerMeshes.forEach((m) => {
      if (!m.material) return;
      if (this.xrayMode) {
        m.material.transparent = true;
        m.material.opacity = 0.22;
        m.material.depthWrite = false;
      } else {
        m.material.transparent = m.userData.origTransparent;
        m.material.opacity = m.userData.origOpacity;
        m.material.depthWrite = !m.userData.origTransparent || m.userData.origOpacity >= 0.8;
      }
      m.material.needsUpdate = true;
    });
  },

  toggleFlow() {
    this.animateFlow = !this.animateFlow;
    document.getElementById("btn3dFlow")?.classList.toggle("active", this.animateFlow);
  },

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    document.getElementById("btn3dAuto")?.classList.toggle("active", this.autoRotate);
  },

  toggleLabels() {
    this.showLabels = !this.showLabels;
    document.getElementById("btn3dLabels")?.classList.toggle("active", this.showLabels);
  },

  setView(viewKey) {
    const spec = this.specs[this.currentLessonId];
    if (!spec || !this.camera || !spec.views[viewKey]) return;
    const p = spec.views[viewKey];
    this.camera.position.set(p[0], p[1], p[2]);
    if (this.controls) {
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    }
  }
};
