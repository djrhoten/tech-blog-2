//delete post
async function deleteFormHandler(event) {
  event.preventDefault();
  //only need id
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });
  //after delete take back to user posts
  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}
//delete button
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
