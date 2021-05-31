function get_user_widget_markup (user) {  
  return "<div class='user-profile'>\
    <img src='${user}'' alt='' class='user-image'>\
    <h2 class='user-name'>${user}</h2>\
    <p class='user-title'>${user}</p>\
  </div>"
}

console.log(get_user_widget_markup('kevin'));