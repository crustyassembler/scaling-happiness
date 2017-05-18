function addItemNotify() {
  if (!("Notification" in window)) return;

  else if (Notification.permission === "granted") {
    var notification = new Notification("Item added to basket");
  }

  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Item added to basket");
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var basket_counter = document.getElementById('basket-count');
  var basket_button  = document.getElementById('basket-add');
  basket_button.addEventListener('mouseup', function(e) {
    e.preventDefault();
    if(e.which !== 1)
      return;
    var bobj = [];

    if(!localStorage.getItem('basket')) {
      bobj.push({
        course_name: basket_button.dataset.courseName,
        course_id  : basket_button.dataset.courseId
      });
      bobj64 = btoa(JSON.stringify(bobj));
      localStorage.setItem('basket', bobj64);
    } else {
      bobj64 = atob(localStorage.getItem('basket'));
      bobj = JSON.parse(bobj64);
      bobj.push({
        course_name: basket_button.dataset.courseName,
        course_id  : basket_button.dataset.courseId
      });
      bobj64 = btoa(JSON.stringify(bobj));
      localStorage.setItem('basket', bobj64);
    }

    updateCartCount(basket_counter);
    addItemNotify();
  });
});
