<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

public function Read(){
    $query = $this->db->prepare("SELECT * FROM contacts where id_user = 1");
    $query->execute();
    $data = array();
    while ($row = $query->fetch(PDO::FETCH_ASSOC)){
        $data[] = $row;
    }
    return json_encode(['accs' => $data]);
}
$acc = new Acc();
echo $acc->Read();
?>