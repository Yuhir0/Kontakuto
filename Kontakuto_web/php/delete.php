<?php

$data = json_decode(file_get_contents('php://input'), TRUE);

if (isset($data['task'])) {

    require __DIR__ . '/library.php';

    $id_contact = (isset($data['task']['id_contact']) ? $data['task']['id_contact'] : NULL);
    $id_user = (isset($data['task']['id_user']) ? $data['task']['id_user'] : NULL);

    // Delete the Task
    $task = new Task();

    $task->Delete($id_contact, $id_user);
}

?>