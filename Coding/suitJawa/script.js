function getComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  // menentukan hasil dari pilihan player
  if (player == comp) return "KAMU SERI!";
  if (player == "gajah") return comp == "orang" ? "KAMU MENANG!" : " KAMU KALAH!";
  if (player == "orang") return comp == "gajah" ? "KAMU KALAH!" : "KAMU MENANG!";
  if (player == "semut") return comp == "orang" ? "KAMU KALAH" : "KAMU MENANG!";
}

function putar() {
  const gambarKomputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  const waktuMulai = new Date().getTime();
  let i = 0;

  const interval = setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval(interval);
      return;
    }

    gambarKomputer.setAttribute("src", "img/" + gambar[i] + ".png");
    i++;
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pilihan) {
  pilihan.addEventListener("click", function () {
    const pilihanPlayer = pilihan.className;
    const pilihanComputer = getComputer();
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    updateSkor(hasil);

    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const infoHasil = document.querySelector(".info");
      infoHasil.innerHTML = hasil;
    }, 1000);
  });
});

function updateSkor(hasil) {
  let hasilPlayer = 0;
  let hasilComputer = 0;
  if (hasil == "KAMU MENANG!") {
    hasilPlayer++;
  } else if (hasil == "KAMU KALAH!") {
    hasilComputer++;
  }

  document.getElementById("skor-player").innerText = hasilPlayer;
  document.getElementById("skor-computer").innerText = hasilComputer;
}
