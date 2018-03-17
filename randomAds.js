<script language="Javascript">
images = new Array(5);
images[0] = "<a href = 'URL FOR LINK' rel='nofollow'><img src='IMAGE URL' border='0' height='250px' width='300px' alt=''></a>";
images[2] = "<a href = 'URL FOR LINK' rel='nofollow'><img src='IMAGE URL' border='0' height='250px' width='300px' alt=''></a>";
images[3] = "<a href = 'URL FOR LINK' rel='nofollow'><img src='IMAGE URL' border='0' height='250px' width='300px' alt=''></a>";
images[4] = "<a href = 'URL FOR LINK' rel='nofollow'><img src='IMAGE URL' border='0' height='250px' width='300px' alt=''></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
</script>
