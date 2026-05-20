document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("site-navigation");
  if (!nav) {
    return;
  }

  var header = document.getElementById("header");
  var wrap = header ? header.querySelector(".wrap") : null;
  var menu = nav.querySelector(".nav-menu");

  if (!wrap || !menu) {
    return;
  }

  var menuId = menu.id || "mobile-primary-menu";
  menu.id = menuId;

  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "menu-toggle";
  toggle.setAttribute("aria-controls", menuId);
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Toggle navigation");
  toggle.innerHTML =
    '<span class="menu-toggle-box" aria-hidden="true"><span></span><span></span><span></span></span><span class="menu-toggle-text">Menu</span>';

  wrap.insertBefore(toggle, nav);

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    header.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  var items = nav.querySelectorAll("li");
  for (var i = 0; i < items.length; i += 1) {
    var item = items[i];
    var submenu = null;
    var link = null;
    var children = item.children;

    for (var j = 0; j < children.length; j += 1) {
      if (!link && children[j].tagName === "A") {
        link = children[j];
      }

      if (!submenu && children[j].classList && children[j].classList.contains("sub-menu")) {
        submenu = children[j];
      }
    }

    if (!submenu || !link) {
      continue;
    }

    item.classList.add("has-submenu");

    var submenuToggle = document.createElement("button");
    submenuToggle.type = "button";
    submenuToggle.className = "submenu-toggle";
    submenuToggle.setAttribute("aria-expanded", "false");
    submenuToggle.setAttribute("aria-label", "Toggle submenu");
    submenuToggle.innerHTML = '<span aria-hidden="true"></span>';

    link.insertAdjacentElement("afterend", submenuToggle);

    if (
      item.classList.contains("current-menu-item") ||
      item.classList.contains("current_page_item") ||
      item.classList.contains("current-page-ancestor") ||
      item.classList.contains("current_page_ancestor")
    ) {
      item.classList.add("submenu-open");
      submenuToggle.setAttribute("aria-expanded", "true");
    }

    submenuToggle.addEventListener("click", function (event) {
      var button = event.currentTarget;
      var parent = button.parentNode;
      var isExpanded = parent.classList.toggle("submenu-open");
      button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });
  }
});
