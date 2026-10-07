const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

openButton.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    openButton.innerHTML = "💗 Close Letter";

    createBloom();
    createBloom();
    createBloom();
    createBloom();
    createBloom();
  } else {
    openButton.innerHTML = "💌 Open Your Letter";
  }
});

function showMessage(type) {
  const box = document.getElementById("messageBox");
  const text = document.getElementById("messageText");

  if (type === "verse") {
    text.innerHTML =
      "“This is the day that the Lord has made; let us rejoice and be glad in it.” — Psalm 118:24 💗<br><br>" +
      "I pray that God fills your day with peace, joy, strength, and beautiful little moments.";
  }

  if (type === "prayer") {
    text.innerHTML =
      "My prayer for you today is that God protects you wherever you go, gives you wisdom in everything you do, and keeps your heart peaceful. May He guide your steps, bless your dreams, and remind you every day how deeply loved you are. 🙏💗";
  }

  if (type === "love") {
    text.innerHTML =
      "One more thing, Julie... I really appreciate you. I appreciate your time, your sweetness, your little actions, and even the simple moments when you hold my hand. Those moments may seem small, but they mean so much to me. I hope I can continue making you smile, one day at a time. 🌷💗";
  }

  box.classList.remove("show");

  setTimeout(() => {
    box.classList.add("show");
  }, 50);

  createHeartBurst();
}

musicButton.addEventListener("click", () => {
  if (music.paused) {
    music
      .play()
      .then(() => {
        musicButton.innerHTML = "⏸ Pause Music";
      })
      .catch(() => {
        musicButton.innerHTML = "🎵 Tap Again to Play";
      });
  } else {
    music.pause();
    musicButton.innerHTML = "▶ Play Music";
  }
});

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "flowing-heart";

  const hearts = ["💗", "💖", "💕", "💓", "💞", "♡"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

function createFlower() {
  const flower = document.createElement("div");

  flower.className = "flowing-flower";

  const flowers = ["🌸", "🌷", "🌺", "🌼"];

  flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.bottom = "-40px";
  flower.style.fontSize = 18 + Math.random() * 20 + "px";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

function createBloom() {
  const bloom = document.createElement("div");

  bloom.className = "bloom";

  const flowers = ["🌸", "🌷", "🌺", "💐", "💗"];

  bloom.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

  const rect = envelope.getBoundingClientRect();

  bloom.style.left = rect.left + Math.random() * rect.width + "px";

  bloom.style.top = rect.top + Math.random() * rect.height + "px";

  bloom.style.fontSize = 20 + Math.random() * 30 + "px";

  document.body.appendChild(bloom);

  setTimeout(() => {
    bloom.remove();
  }, 2000);
}

function createHeartBurst() {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      createBloom();
    }, i * 100);
  }
}

setInterval(createHeart, 900);
setInterval(createFlower, 1800);
