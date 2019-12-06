$(function(){
  function buildHTML(message){

    var image_html = ``;
    if (message.image){
      image_html = `<img class="message__lower__image" src="${ message.image }">`;
    } else {
    var html = `<div class="message">
                  <div class="message__upper-info">
                    <p class="message__upper-info__talker">
                      ${message.user_name}
                    </p>
                    <p class="message__upper-info__date">
                      ${message.created_at}
                    </p>
                  </div>
                  <p class="message__lower">
                    <p class="message__lower__text">
                      ${message.content}
                    </p>
                    ${image_html}
                  </p>
                  
                </div>`;
    }
    return html;
  }
  

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message)

      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('エラー')
    })
  })
});