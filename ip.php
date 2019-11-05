
<?php
echo "var ip = '".getenv("REMOTE_ADDR")."';";
echo "var hostname='".getenv("REMOTE_ADDR")."';";
?>
alert(ip, hostname);  
