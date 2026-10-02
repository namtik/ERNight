// 내전 매니저 설정 파일
// Supabase 프로젝트를 만든 뒤 아래 4줄을 채워주세요. (README.md 2단계 참고)
// 이 값들은 공개되어도 괜찮은 값입니다. 데이터는 비밀번호로 로그인해야만 읽을 수 있습니다.
window.NAEJEON_CONFIG = {
  // Supabase → Project Settings → API → Project URL
  supabaseUrl: "https://dbrjqltvwhnkixhykpcz.supabase.co",
  // Supabase → Project Settings → API → anon public 키
  supabaseAnonKey: "sb_publishable_mnmA_1E3EFci_tdz-6g6Dw_OQk3lIeI",

  // Supabase에 만들 두 계정의 이메일 (supabase.sql 안의 이메일과 똑같아야 합니다)
  adminEmail: "admin@naejeon.app",
  viewerEmail: "viewer@naejeon.app",

  // (선택) 로그인 보안 확인 — Cloudflare Turnstile 사이트 키. 비워두면 사용 안 함 (README 5단계)
  turnstileSiteKey: "",

  // 로그인 화면과 브라우저 탭에 보일 이름 (로그인 후에는 사이트 설정의 이름이 쓰입니다)
  siteName: "내전 매니저",
};
