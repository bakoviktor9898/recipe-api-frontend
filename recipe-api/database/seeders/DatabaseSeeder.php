<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
           'name' => 'Bakó Viktor',
           'email' => 'bako.viktor9898@gmail.com',
           'password' => Hash::make('password')   
        ]); 
        DB::table('users')->insert([
           'name' => 'Bakó alex',
           'email' => 'bako.alex@gmail.com',
           'password' => Hash::make('password')   
        ]); 
         DB::table('recipes')->insert([
            'user_id' => 1,
            'name' => 'Csirkemáj rántva ropogós krokettel',
            'kcal' => 844,
            'preparation_time' => 45,
            'preparation' =>
            'A májat mosás után töröljük szárazra.
            Panírozzuk be, először lisztben forgassuk meg, aztán a tejjel lazított tojásban, végül a zsemlemorzsában.
            Olajban süssük mindkét oldalát barnára. Szedjük papírtörlőre.
            Tálaláskor sózzuk, és a frissen sült krokettel, esetleg savanyúsággal kínáljuk. Jó étvágyat!!'
        ]);
        DB::table('recipes')->insert([
            'user_id' => 1,
            'name' => 'Garnélás rablónyárs',
            'kcal' => 224,
            'preparation_time' => 18,
            'preparation' =>
            'A fagyasztott garnélát a fokhagymával ízesített fehérborban hagyjuk kiolvadni. Ha frisset használunk, akkor a fokhagymás borban pácoljuk 1-2 órát.
            Közben megtisztítjuk és felkarikázzuk az édesburgonyát és a csicsókát, felszeleteljük a lime-ot, cikkekre vágjuk és szétszedjük a lila hagymát és nagyobb kockára daraboljuk a kaliforniai paprikát.
            A nyárspálcikákra felváltva a garnélával vegyesen felfűzzük a zöldségeket. Hőálló sütőedénybe sorakoztatjuk a nyársakat. Sózzuk, borsozzuk és a rák páclevéből kb. 100 ml-t ráöntünk a zúzott fokhagymadarabkákkal együtt.
            A tetejét meglocsoljuk kb. 2 evőkanálnyi olívaolajjal és hőlégkeveréssel 180 fokon addig sütjük, amíg a zöldségek megpirulnak. Olívabogyóval színesített jégsaláta ágyon tálaljuk, amit a nyársról lehúzott sült lime levével meglocsolunk.'
        ]);
        DB::table('recipes')->insert([
            'user_id' => 2,
            'name' => 'Retro majomkenyér',
            'kcal' => 1296,
            'preparation_time' => 39,
            'preparation' =>
            'Vízgőz felett összefőzzük a margarint, a porcukrot, a lisztet, a felvert tojást, és a kakaóport, állandó keverés mellett.
            Belekeverjük a durvára vágott diót, és az összemorzsolt babapiskótákat. Jól egybeforgatjuk.
            Egy folpackkal bélelt hosszúkás formába simítjuk. Hűtőbe tesszük dermedni legalább 2 órára.
            Ráteszünk egy tetszőleges tányért, átfordítjuk rá, és utána szeletelhetjük. Jó étvágyat!!'
        ]);
        DB::table('recipes')->insert([
            'user_id' => 2,
            'name' => 'Nyuszibriós',
            'kcal' => 652,
            'preparation_time' => 113,
            'preparation' =>
            ' A lekvár kivételével a hozzávalókat kenyérsütő gépbe vagy keverőgépbe helyezzük és kidolgozzuk a tésztát. A tejet fokozatosan adagoljuk, ha nagyon kemény még adjunk hozzá, ha túl folyós akkor egy kis lisztet adjunk hozzá. Egy kellemesen lágy tésztát kapunk. Lefedve, meleg helyen duplájára kelesztjük.
            Amikor megkelt, 6 vagy 8 egyenlő részre osztjuk attól függően, mekkora briósokat szeretnénk és gombócokat formázunk belőle. A kis gombócokat 10 percig pihentetjük, majd a sima briósnak szánt bucikat egy lisztezett deszkán ovális alakúra nyújtjuk.
            Vékonyra nyújtsuk, majd kenjük meg a választott lekvárral, vagy olvasztott vajjal. (Én narancsos, gyömbéres lekvárral kentem meg. )A megkent tésztákat félbehajtjuk hosszában, majd feltekerjük a végét az aljára hajtjuk, majd sütőpapírral bélelt tepsire helyezzük.'
        ]); 
    }
}
