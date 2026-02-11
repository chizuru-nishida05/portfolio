document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const btn = document.getElementById("lightBtn");
    const catchcopy = document.querySelector(".hero-catchcopy");
    const sections = document.querySelectorAll(".section");
  
    let started = false;
  
    btn.addEventListener("click", () => {
      if (started) return;
      started = true;
  
      // 1) 点灯
      body.classList.remove("is-off");
      body.classList.add("is-on");
  
      btn.disabled = true;
  
      // 2) キャッチ表示
      window.setTimeout(() => {
        catchcopy.classList.add("is-show");
      }, 650);
  
      // 3) セクション順表示
      window.setTimeout(() => {
        sections.forEach((sec, i) => {
          window.setTimeout(() => {
            sec.classList.add("is-show");
          }, i * 220);
        });
      }, 1100);
    });
  });
  