// ==========================================================================
// SINGLE SOURCE OF TRUTH: DANH SÁCH 7 MODULE MÔN HỌC - CỔNG ÔN TẬP KHYS 2026
// Mỗi module là một sub-app độc lập tại /<slug>/ với localStorage riêng biệt.
// ==========================================================================

(function (global) {
  'use strict';

  const PORTAL_META = {
    title: 'Cổng Ôn Tập Cao Học Khoa Học Y Sinh 2026',
    institution: 'Đại học Y Dược TP.HCM (YDS / UMP)',
    badge: 'Tuyển sinh Sau đại học 2026 • KHYS YDS',
    portalThemeKey: 'yds_portal_theme'
  };

  const PORTAL_SUBJECTS = [
    {
      id: 'sinh-ly',
      slug: 'sinh-ly',
      route: '/sinh-ly/',
      href: './sinh-ly/',
      name: 'Sinh lý học Y khoa',
      shortName: 'Sinh lý học',
      category: 'co-so',
      categoryLabel: 'Môn cơ sở',
      order: 1,
      accent: '#0284c7',
      accentSoft: '#e0f2fe',
      accentDark: '#0369a1',
      lessonsCount: 17,
      questionsCount: 408,
      storageKey: 'yds_physio_2026_progress',
      themeKey: 'yds_physio_theme',
      progressSchema: 'v1',
      summary: '17 chuyên đề đầy đủ thuộc 7 hệ cơ quan (Máu, Tim mạch, Hô hấp, Thận niệu, Tiêu hóa, Nội tiết, Thần kinh) bám sát Sinh lý học Y khoa YDS 2025.',
      highlights: ['17 Chuyên đề', '17 Phòng mô phỏng', 'Sơ đồ & Hình YDS', '408 Câu KSA'],
      keywords: 'sinh ly mau tim mach ho hap than tieu hoa noi tiet than kinh ecg nephron',
      backupRepoName: 'on-tap-sinh-ly-sdh-2026',
      backupRepoUrl: 'https://github.com/hoangkol/on-tap-sinh-ly-sdh-2026',
      iconSvg: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#0284c7"/><path d="M12 34h10l6-14 8 26 6-12h10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'giai-phau',
      slug: 'giai-phau',
      route: '/giai-phau/',
      href: './giai-phau/',
      name: 'Giải phẫu học 3D',
      shortName: 'Giải phẫu 3D',
      category: 'chuyen-nganh',
      categoryLabel: 'Chuyên ngành KHYS',
      order: 2,
      accent: '#be123c',
      accentSoft: '#ffe4e6',
      accentDark: '#9f1239',
      lessonsCount: 7,
      questionsCount: 168,
      storageKey: 'yds_anat_2026_progress',
      themeKey: 'yds_anat_theme',
      progressSchema: 'v1',
      summary: '2 Module đề cương (Tiêu hóa: Dạ dày, Gan, Tụy; Tim mạch: Tim, Mạch máu vùng bụng) với 7 mô hình WebGL xoay 360°, Atlas SVG và 42 Flashcards.',
      highlights: ['7 Mô hình 3D WebGL', '7 Atlas SVG', '42 Flashcards', '168 Câu KSA'],
      keywords: 'giai phau 3d da day gan tuy tim mach vanh tinh mach cua dong mach chu bung',
      backupRepoName: 'on-tap-giai-phau-sdh-2026',
      backupRepoUrl: 'https://github.com/hoangkol/on-tap-giai-phau-sdh-2026',
      iconSvg: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#be123c"/><path d="M32 50C20 41 14 33 14 23c0-6.2 4.8-11 10.8-11 3.5 0 6.7 1.8 7.2 4.3.5-2.5 3.7-4.3 7.2-4.3C45.2 12 50 16.8 50 23c0 10-6 18-18 27z" fill="#ffffff"/><path d="M32 16v18M24 25h16" stroke="#be123c" stroke-width="3.2" stroke-linecap="round"/></svg>'
    },
    {
      id: 'mo-hoc',
      slug: 'mo-hoc',
      route: '/mo-hoc/',
      href: './mo-hoc/',
      name: 'Mô học đại cương',
      shortName: 'Mô học',
      category: 'chuyen-nganh',
      categoryLabel: 'Chuyên ngành KHYS',
      order: 3,
      accent: '#6d28d9',
      accentSoft: '#ede9fe',
      accentDark: '#5b21b6',
      lessonsCount: 8,
      questionsCount: 192,
      storageKey: 'yds_histo_2026_progress',
      themeKey: 'yds_histo_theme',
      progressSchema: 'v1',
      summary: '2 Chuyên đề (Biểu mô & Mô liên kết, Mô sụn – Mô xương – Mô mỡ) kèm Atlas 61 hình & sơ đồ chú thích tương tác theo bảng màu nhuộm H&E.',
      highlights: ['8 Bài học', 'Atlas 61 Hình H&E', 'Mô phỏng tương tác', '192 Câu KSA'],
      keywords: 'mo hoc bieu mo collagen mo lien ket sun xuong tao cot bao mo mo h&e',
      backupRepoName: 'on-tap-mo-hoc-sdh-2026',
      backupRepoUrl: 'https://github.com/hoangkol/on-tap-mo-hoc-sdh-2026',
      iconSvg: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#6d28d9"/><polygon points="32,10 51,21 51,43 32,54 13,43 13,21" fill="#fbcfe8" stroke="#ffffff" stroke-width="3"/><circle cx="32" cy="32" r="8" fill="#6d28d9"/><circle cx="29" cy="29" r="2.5" fill="#ffffff"/></svg>'
    },
    {
      id: 'giai-phau-benh',
      slug: 'giai-phau-benh',
      route: '/giai-phau-benh/',
      href: './giai-phau-benh/',
      name: 'Giải phẫu bệnh',
      shortName: 'Giải phẫu bệnh',
      category: 'chuyen-nganh',
      categoryLabel: 'Chuyên ngành KHYS',
      order: 4,
      accent: '#9d174d',
      accentSoft: '#fce7f3',
      accentDark: '#831843',
      lessonsCount: 8,
      questionsCount: 192,
      storageKey: 'yds_patho_2026_progress',
      themeKey: 'yds_patho_theme',
      progressSchema: 'v2',
      summary: '3 Chuyên đề (Tổn thương cơ bản tế bào & mô, Giải phẫu bệnh bướu, Bệnh học phân tử ung thư) cùng Atlas 35 hình & sơ đồ chú thích.',
      highlights: ['8 Bài học', 'Atlas 35 Hình', 'TNM & Sinh ung', '192 Câu KSA'],
      keywords: 'giai phau benh hoai tu apoptosis chuyen san loan san buou ung thu tp53 tnm',
      backupRepoName: 'on-tap-giai-phau-benh-sdh-2026',
      backupRepoUrl: 'https://github.com/hoangkol/on-tap-giai-phau-benh-sdh-2026',
      iconSvg: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#9d174d"/><circle cx="32" cy="32" r="19" fill="#fdf2f8" stroke="#ffffff" stroke-width="3"/><circle cx="32" cy="32" r="8" fill="#4338ca"/><circle cx="29" cy="29" r="2.5" fill="#ffffff" opacity="0.85"/></svg>'
    },
    {
      id: 'sinh-ly-benh-mien-dich',
      slug: 'sinh-ly-benh-mien-dich',
      route: '/sinh-ly-benh-mien-dich/',
      href: './sinh-ly-benh-mien-dich/',
      name: 'Sinh lý bệnh – Miễn dịch',
      shortName: 'SLB – Miễn dịch',
      category: 'chuyen-nganh',
      categoryLabel: 'Chuyên ngành KHYS',
      order: 5,
      accent: '#1d4ed8',
      accentSoft: '#dbeafe',
      accentDark: '#1e40af',
      lessonsCount: 6,
      questionsCount: 144,
      storageKey: 'yds_slb_md_2026_progress',
      themeKey: 'yds_slb_md_theme',
      progressSchema: 'v2',
      summary: '6 Bài trọng tâm Đại cương Miễn dịch học (Bẩm sinh & Thích nghi, T/B, CD, HEV, Lược sử Nobel) kèm Atlas 19 hình & sơ đồ vector.',
      highlights: ['6 Bài học', 'Atlas 19 Hình & Sơ đồ', '6 Phòng Lab', '144 Câu KSA'],
      keywords: 'sinh ly benh mien dich lympho t b khang the hev bo the opson nobel',
      backupRepoName: 'on-tap-sinh-ly-benh-mien-dich-sdh-2026',
      backupRepoUrl: 'https://github.com/hoangkol/on-tap-sinh-ly-benh-mien-dich-sdh-2026',
      iconSvg: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#1d4ed8"/><path d="M32 14v18M32 32L18 46M32 32l14 14M20 42l-4 4M44 42l4 4" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="32" cy="15" r="4" fill="#2dd4bf"/></svg>'
    },
    {
      id: 'vi-sinh',
      slug: 'vi-sinh',
      route: '/vi-sinh/',
      href: './vi-sinh/',
      name: 'Vi sinh Y học',
      shortName: 'Vi sinh',
      category: 'chuyen-nganh',
      categoryLabel: 'Chuyên ngành KHYS',
      order: 6,
      accent: '#0f766e',
      accentSoft: '#ccfbf1',
      accentDark: '#115e59',
      lessonsCount: 7,
      questionsCount: 168,
      storageKey: 'yds_micro_2026_progress',
      themeKey: 'yds_micro_theme',
      progressSchema: 'v1',
      summary: '2 Chuyên đề (Nhiễm khuẩn & Miễn dịch; Thuốc kháng sinh) cùng 7 hoạt cảnh quá trình, 7 phòng thí nghiệm kháng sinh & 168 câu KSA.',
      highlights: ['7 Bài học', '7 Hoạt cảnh SVG', '7 Phòng Lab', '168 Câu KSA'],
      keywords: 'vi sinh nhiem khuan doc to khang sinh beta lactam quinolone khang lao',
      backupRepoName: 'on-tap-vi-sinh-sdh-2026',
      backupRepoUrl: 'https://github.com/hoangkol/on-tap-vi-sinh-sdh-2026',
      iconSvg: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#0f766e"/><circle cx="32" cy="32" r="16" fill="none" stroke="#ffffff" stroke-width="4"/><circle cx="27" cy="28" r="3.5" fill="#ffffff"/><circle cx="38" cy="36" r="3" fill="#99f6e4"/><path d="M32 10v6M32 48v6M10 32h6M48 32h6M16.5 16.5l4.2 4.2M43.3 43.3l4.2 4.2M47.5 16.5l-4.2 4.2M20.7 43.3l-4.2 4.2" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/></svg>'
    },
    {
      id: 'ky-sinh-trung',
      slug: 'ky-sinh-trung',
      route: '/ky-sinh-trung/',
      href: './ky-sinh-trung/',
      name: 'Ký sinh trùng Y học',
      shortName: 'Ký sinh trùng',
      category: 'chuyen-nganh',
      categoryLabel: 'Chuyên ngành KHYS',
      order: 7,
      accent: '#4338ca',
      accentSoft: '#e0e7ff',
      accentDark: '#3730a3',
      lessonsCount: 8,
      questionsCount: 192,
      storageKey: 'yds_parasit_2026_progress',
      themeKey: 'yds_parasit_theme',
      progressSchema: 'v1',
      summary: '2 Chuyên đề (Ký sinh học đại cương, Bệnh động vật ký sinh) với hình động sách giáo khoa, 8 phòng thực hành và 192 câu KSA.',
      highlights: ['8 Bài học', 'Hình động SGK', '8 Labs chẩn đoán', '192 Câu KSA'],
      keywords: 'ky sinh trung giun san don bao sot ret amip chu trinh phat trien kst',
      backupRepoName: 'on-tap-ky-sinh-trung-sdh-2026',
      backupRepoUrl: 'https://github.com/hoangkol/on-tap-ky-sinh-trung-sdh-2026',
      iconSvg: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#4338ca"/><circle cx="32" cy="32" r="19" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-dasharray="6 3"/><path d="M21 36c3-9 10-14 17-12 5 1 8 7 5 12-4 6-14 8-20 4" fill="none" stroke="#34d399" stroke-width="4.5" stroke-linecap="round"/><circle cx="39" cy="27" r="2.8" fill="#ffffff"/><circle cx="24" cy="24" r="2.5" fill="#c7d2fe"/></svg>'
    }
  ];

  function readSubjectProgress(subject, storage) {
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    const result = {
      completedLessons: 0,
      totalLessons: subject.lessonsCount,
      answeredQuestions: 0,
      totalQuestions: subject.questionsCount,
      percent: 0
    };
    if (!store) return result;

    try {
      const raw = store.getItem(subject.storageKey);
      if (!raw) return result;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return result;

      if (subject.progressSchema === 'v2') {
        const completed = parsed.completedLessons || {};
        const answers = parsed.answers || {};
        result.completedLessons = Object.keys(completed).filter(
          (id) => completed[id] && Number(completed[id].bestScore || 0) >= 18
        ).length;
        result.answeredQuestions = Object.keys(answers).reduce(
          (sum, id) => sum + Object.keys(answers[id] || {}).length,
          0
        );
      } else {
        Object.keys(parsed).forEach((lessonId) => {
          const entry = parsed[lessonId];
          if (!entry || typeof entry !== 'object') return;
          const answeredCount = Object.keys(entry.answered || {}).length;
          const totalInLesson = Number(entry.total || 24);
          result.answeredQuestions += answeredCount;
          if (answeredCount >= Math.ceil(totalInLesson * 0.5)) {
            result.completedLessons += 1;
          }
        });
      }

      result.percent = result.totalLessons > 0
        ? Math.min(100, Math.round((result.completedLessons / result.totalLessons) * 100))
        : 0;
    } catch (e) {
      // Ignore malformed localStorage payloads
    }
    return result;
  }

  global.PORTAL_META = PORTAL_META;
  global.PORTAL_SUBJECTS = PORTAL_SUBJECTS;
  global.readSubjectProgress = readSubjectProgress;
})(typeof window !== 'undefined' ? window : globalThis);
