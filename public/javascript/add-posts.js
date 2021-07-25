//function for creating new post
async function newFormHandler(event) {
  event.preventDefault();

  //get new blog title
  const title = document.querySelector('input[name="post-title"]').value;
  //get new blog content
  const post_content = document.querySelector('input[name="post-content"]').value;
  //create new
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  //if ok go to dashboard where you should see the new post
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
//create new post listener
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
