<?php if(isset($_GET['p'])){
    $keyword = $_GET['p'];
    switch($keyword){
        case 'pyy':
        include 'app/views/pyy.php';
        break;
        case 'yrc':
        include 'app/views/yrc.php';
        break;
        case 'yll':
        include 'app/views/yll.php';
        break; 

    }
}else {
  include 'app/views/pyn.php';
}

?>