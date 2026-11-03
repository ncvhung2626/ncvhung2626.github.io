const translations = {
  vi: {
    skip: 'Bỏ qua đến nội dung',
    navAbout: 'Giới thiệu',
    navSkills: 'Kỹ năng',
    navProjects: 'Dự án',
    navContact: 'Liên hệ',
    availability: 'Sẵn sàng cho cơ hội mới',
    heroEyebrow: 'Portfolio kỹ thuật phần mềm · 2026',
    heroTitleBefore: 'Tạo ra những trải nghiệm số ',
    heroTitleAccent: 'có ý nghĩa',
    heroTitleAfter: '.',
    heroCopy: 'Mình là Nguyễn Cao Vạn Hưng, sinh viên Kỹ thuật phần mềm. Mình thích biến những vấn đề thực tế thành sản phẩm web và mobile hữu ích.',
    explore: 'Xem dự án của mình ↗',
    viewCv: 'Xem CV của mình ↗',
    portraitCaption: 'Kỹ thuật phần mềm · TP. Hồ Chí Minh',
    projectsFeatured: 'Dự án nổi bật',
    personalProject: 'Dự án cá nhân',
    proofNote: 'Một số sản phẩm mình đã làm về web, mobile, API và dữ liệu.',
    aboutKicker: '01 / Giới thiệu',
    aboutTitle: 'Một chút về mình.',
    aboutStatement: 'Mình quan tâm đến những chi tiết tạo nên sản phẩm tốt: giao diện rõ ràng, API ổn định và dữ liệu được tổ chức hợp lý.',
    currently: 'Hiện tại',
    aboutTextOne: 'Mình là sinh viên năm cuối ngành Kỹ thuật phần mềm tại Học viện Hàng không Việt Nam. Qua dự án cá nhân và các bài tập lớn, mình đã làm sản phẩm về giáo dục, mua bán, cộng đồng ẩm thực và quản lý quán trà sữa.',
    aboutTextTwo: 'Mình đang tìm cơ hội để tiếp tục học hỏi và đóng góp cho những sản phẩm thực sự có ích.',
    skillsKicker: '02 / Kỹ năng',
    skillsTitle: 'Kỹ năng qua dự án.',
    skillsIntro: 'Chọn một phím để xem mình đã dùng công nghệ đó ở đâu.',
    keyboardHint: 'Chạm hoặc nhấn một phím để khám phá',
    selectedTechnology: 'Công nghệ đang chọn',
    usedIn: 'Đã dùng trong',
    workKicker: '03 / Dự án',
    projectsTitle: 'Dự án nổi bật.',
    projectsIntro: 'WebSinhVien là dự án cá nhân. Ba dự án còn lại là bài tập lớn.',
    educationPlatform: 'Nền tảng giáo dục',
    marketplace: 'Nền tảng mua bán',
    mobileCommunity: 'Cộng đồng mobile',
    shopManagement: 'Quản lý cửa hàng',
    majorCoursework: 'Bài tập lớn',
    webSinhVienDescription: 'Hệ thống quản lý sinh viên với đăng ký môn học, điểm danh QR, bài tập, điểm số, thanh toán và bảng điều khiển theo vai trò.',
    haiHandDescription: 'Nền tảng mua bán với đăng tin, tìm kiếm, yêu thích, đặt hàng, kiểm duyệt và nhắn tin thời gian thực.',
    snapChefDescription: 'Ứng dụng cộng đồng ẩm thực để chia sẻ công thức, bài viết, Reels và nhóm với những người thích nấu ăn.',
    webTiemTraDescription: 'Hệ thống quản lý quán trà sữa với thực đơn, giỏ hàng, đơn hàng, chức năng nhân viên và mã QR cho từng bàn.',
    viewGitHub: 'Xem trên GitHub ↗',
    backgroundKicker: '04 / Hành trình',
    backgroundTitle: 'Luôn học hỏi.',
    education: 'Học vấn',
    academy: 'Học viện Hàng không Việt Nam',
    educationDescription: 'Sinh viên năm cuối ngành Kỹ thuật phần mềm, tập trung vào phát triển full-stack qua các dự án thực tế.',
    languages: 'Ngôn ngữ',
    english: 'Tiếng Anh',
    englishLevel: 'Giao tiếp hằng ngày và công việc ở mức cơ bản',
    japanese: 'Tiếng Nhật',
    japaneseLevel: 'Từ vựng cơ bản và hội thoại đơn giản',
    contactKicker: '05 / Liên hệ',
    contactTitle: 'Cùng tạo ra điều hữu ích.',
    contactIntro: 'Bạn có cơ hội thực tập hoặc một dự án muốn trao đổi?',
    sendEmail: 'Gửi email cho mình ↗',
    footer: 'Thiết kế cho web · TP. Hồ Chí Minh'
  }
};

const technologies = {
  react: { name: 'React', project: 'HaiHand Marketplace', en: 'I built the marketplace interface with React, including product discovery and everyday user flows.', vi: 'Mình dùng React để xây dựng giao diện HaiHand Marketplace, từ tìm kiếm sản phẩm đến các thao tác mua bán hằng ngày.' },
  javascript: { name: 'JavaScript', project: 'HaiHand Marketplace · WebSinhVien', en: 'JavaScript powers the interactive interfaces and client-side behavior in my web projects.', vi: 'JavaScript giúp mình tạo ra các giao diện tương tác và xử lý thao tác phía người dùng trong những dự án web.' },
  node: { name: 'Node.js', project: 'HaiHand Marketplace · SnapChef', en: 'I use Node.js to build APIs and handle the server-side logic behind full-stack products.', vi: 'Mình dùng Node.js để xây dựng API và xử lý phần logic phía máy chủ cho các sản phẩm full-stack.' },
  nest: { name: 'NestJS', project: 'WebSinhVien', en: 'NestJS helps me organize WebSinhVien’s backend into clear, maintainable modules.', vi: 'NestJS giúp mình tổ chức backend của WebSinhVien thành các module rõ ràng, dễ bảo trì.' },
  typescript: { name: 'TypeScript', project: 'WebSinhVien · SnapChef', en: 'TypeScript helps me work with clearer data models and safer code across web and mobile.', vi: 'TypeScript giúp mình mô hình hóa dữ liệu rõ hơn và giảm lỗi khi làm việc trên web lẫn mobile.' },
  socket: { name: 'Socket.io', project: 'HaiHand Marketplace', en: 'Socket.io enables real-time chat and notifications between marketplace users.', vi: 'Socket.io hỗ trợ nhắn tin và thông báo thời gian thực giữa người dùng trên HaiHand Marketplace.' },
  postgres: { name: 'PostgreSQL', project: 'WebSinhVien', en: 'PostgreSQL stores connected academic data such as courses, grades and user roles.', vi: 'PostgreSQL lưu trữ dữ liệu học vụ có liên kết như môn học, điểm số và vai trò người dùng.' },
  mongo: { name: 'MongoDB', project: 'HaiHand Marketplace', en: 'MongoDB holds flexible marketplace data for listings, users and messages.', vi: 'MongoDB lưu trữ dữ liệu linh hoạt cho tin đăng, người dùng và tin nhắn của sàn mua bán.' },
  php: { name: 'PHP', project: 'WebTiemTra', en: 'PHP powers the tea shop’s menu, order and management features.', vi: 'PHP xử lý các chức năng thực đơn, đặt hàng và quản lý của WebTiemTra.' },
  mysql: { name: 'MySQL', project: 'WebTiemTra', en: 'MySQL stores tables, menu items, orders and staff data for the tea shop.', vi: 'MySQL lưu dữ liệu bàn, món, đơn hàng và nhân viên cho quán trà sữa.' },
  git: { name: 'Git', project: 'All projects', projectVi: 'Tất cả dự án', en: 'I use Git and GitHub to track changes and share project source code.', vi: 'Mình dùng Git và GitHub để theo dõi thay đổi và chia sẻ mã nguồn dự án.' },
  supabase: { name: 'Supabase', project: 'SnapChef', en: 'Supabase supports the data and service layer of the SnapChef mobile app.', vi: 'Supabase hỗ trợ lớp dữ liệu và dịch vụ cho ứng dụng mobile SnapChef.' }
};

const translatable = [...document.querySelectorAll('[data-i18n]')];
const englishText = Object.fromEntries(translatable.map((element) => [element.dataset.i18n, element.textContent]));
const keys = [...document.querySelectorAll('.tech-key')];
let language = 'en';
let selectedTech = 'react';

function showTechnology(id) {
  const technology = technologies[id];
  if (!technology) return;
  selectedTech = id;
  document.getElementById('skill-name').textContent = technology.name;
  document.getElementById('skill-description').textContent = technology[language];
  document.getElementById('skill-project').textContent = language === 'vi' ? technology.projectVi || technology.project : technology.project;
  keys.forEach((key) => {
    const active = key.dataset.tech === id;
    key.classList.toggle('selected', active);
    key.setAttribute('aria-pressed', String(active));
  });
}

function setLanguage(nextLanguage) {
  if (nextLanguage !== 'en' && nextLanguage !== 'vi') return;
  language = nextLanguage;
  document.documentElement.lang = language;
  translatable.forEach((element) => {
    element.textContent = language === 'vi' ? translations.vi[element.dataset.i18n] : englishText[element.dataset.i18n];
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  showTechnology(selectedTech);
}

document.querySelector('.keyboard-deck').addEventListener('click', (event) => {
  const key = event.target.closest('.tech-key');
  if (key) showTechnology(key.dataset.tech);
});

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
