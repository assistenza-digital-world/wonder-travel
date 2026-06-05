<?php
/**
 * TEMPLATE delle credenziali — NON contiene segreti reali (è versionabile).
 *
 * COME USARLO:
 *   1. Copia questo file come "secrets.php" nella stessa cartella (server/).
 *   2. Compila secrets.php con i valori veri (password casella email + DB).
 *   3. secrets.php NON va versionato (è già in .gitignore) e va caricato sul
 *      server accanto a lead.php / db.php.
 *
 * In ALTERNATIVA puoi non creare secrets.php e impostare le variabili
 * d'ambiente su Cloudways: WT_SMTP_PASS, WT_DB_HOST, WT_DB_NAME, WT_DB_USER,
 * WT_DB_PASS. Le variabili d'ambiente hanno priorità su questo file.
 */
return [
    'smtp_pass' => '',          // password della casella info@wondertravel.it (Aruba)
    'db_host'   => 'localhost', // host DB (Cloudways: di solito 'localhost')
    'db_name'   => '',          // nome database (Cloudways > Access Details)
    'db_user'   => '',          // utente DB
    'db_pass'   => '',          // password DB
];
