import $ from "jquery";

setInterval(() => {
  const $show = $("span[data-show]");

  const $next =
    $show.next("span").length === 1
      ? $show.next("span")
      : $("span:first-of-type");

  const $up = $("span[data-up]");

  if ($up.length) {
    $up.removeAttr("data-up");
  }

  $show.removeAttr("data-show").attr("data-up", "");

  $next.attr("data-show", "");
}, 2000);
