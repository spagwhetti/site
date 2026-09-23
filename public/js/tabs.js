function openTab(evt, tabName) {
    const tabs = document.querySelectorAll(".tab");
    const btns = document.querySelectorAll(".btn");

    tabs.forEach(tab => {
        tab.style.display = "none";
    });

    btns.forEach(btn => {
        btn.classList.remove("open");
    });

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.classList.add("open");
} 