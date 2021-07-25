//create comments
async function commentsFormHandler(event) {
  event.preventDefault();
  //new comment text
  const comments_text = document.querySelector('textarea[name="comments-body"]').value.trim();
  //get comment id from the url
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  //if comment new text exist...
  if (comments_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comments_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //reload to show new comment 
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

//submit button listener
document.querySelector('.comments-form').addEventListener('submit', commentsFormHandler);
