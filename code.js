const full_html = "Hi, I am Rohan Hussain,^";

let cur_display_length = 0;
let increasing_interval = -1;
const typing_speed = 50;

const titles = [
  "Software Engineer",
  "Teacher",
  "Vector Illustration Artist",
  "Graphics Designer",
];
const title_icons = [
  "fas fa-code",
  "fas fa-chalkboard-teacher",
  "fas fa-seedling",
  "fas fa-paint-brush",
];

let grow_title_interval = -1,
  shrink_title_interval = -1;
let cur_title_index = 0,
  title_display_index = 0;

const h1 = document.querySelector("#intro-heading");

const initial_increasing_interval_function = () => {
  if (cur_display_length >= full_html.length) {
    window.clearInterval(increasing_interval);
    titles_function();
  } else {
    cur_display_length++;

    if (full_html[cur_display_length - 1] == "^") h1.innerHTML += "<br>";
    else if (h1) h1.innerHTML += full_html[cur_display_length - 1];
  }
};

const growTitle = () => {
  document.querySelector("#prof-icon").className = title_icons[cur_title_index];
  if (title_display_index >= titles[cur_title_index].length) {
    window.clearInterval(grow_title_interval);
    window.setTimeout(() => {
      shrink_title_interval = window.setInterval(shrinkTitle, typing_speed);
    }, 1000);
  } else {
    h1.innerHTML += titles[cur_title_index][title_display_index];
    title_display_index++;
  }
};

const shrinkTitle = () => {
  if (title_display_index <= 1) {
    cur_title_index = (cur_title_index + 1) % titles.length;
    window.clearInterval(shrink_title_interval);
    window.setTimeout(() => {
      grow_title_interval = window.setInterval(growTitle, typing_speed);
    }, 100);
  }
  h1.innerHTML = h1.innerHTML.substring(0, h1.innerHTML.length - 1);
  title_display_index--;
};

const titles_function = () => {
  grow_title_interval = window.setInterval(growTitle, typing_speed);
};

increasing_interval = window.setInterval(
  initial_increasing_interval_function,
  typing_speed
);
