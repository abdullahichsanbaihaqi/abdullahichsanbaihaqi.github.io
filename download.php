<?php
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename='.basename("assets/img/poto.jgp"));
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: private');
            header('Pragma: private');
            header('Content-Length: ' . filesize("assets/img/poto.jgp"));
            ob_clean();
            flush();
            readfile("assets/img/poto.jgp";
            
            exit;
?>