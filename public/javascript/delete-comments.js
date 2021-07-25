//delete comment
async function deleteFormHandler(event) {
  event.preventDefault();

  //only need id which we get from url
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

  const response = await fetch(`/api/comments/${id}`, {
    method: 'DELETE'
  });
  //after deleting take to user comments to display successful deletion
  if (response.ok) {
    document.location.replace('/dashboard/user-comments/');
  } else {
    alert(response.statusText);
  }
}
//delete button
document.querySelector('#delete-comments-btn').addEventListener('click', deleteFormHandler);