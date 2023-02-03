---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# Lezione5

Lezione sui sensori

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Fare click per andare avanti <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# Il sensore di luminosità

Per misurare la luminosità di un ambiente usiamo il **fotoresistore** che varia la resistenza in base alla quantità di luce. 

<div flex>
  <div>
    <img src="https://m.media-amazon.com/images/I/41ySvREx8zL._AC_SY450_.jpg" alt="fotoresistenza" width="200">
  </div>

  <div>
    <img src="https://i.ytimg.com/vi/kDMbDvXm2io/maxresdefault.jpg" alt="fotoresistenza-arduino" width="600">
  </div>
</div>

---

# Codice

```c
#define LED 3
#define SENSORE A0

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(SENSORE, INPUT);

  Serial.begin(9600);
}

void loop() {
  int luce = analogRead(SENSORE) / 4;
  
  digitalWrite(LED, luce);
  
  Serial.println(luce);
}
```

---

# Sensore di temperatura

Per misurare la temperatura useremo il sensore TMP36 permette di acquisire temperature comprese nell’intervallo tra -40°C e +125°C restituendo in uscita valori di tensione lineari tra circa 0.1Vdc e 1.7Vdc.

<div flex>
  <div>
    <img src="https://i.ibb.co/w0hFDsT/TMP36-GT9-Z-001.jpg" alt="sens-temp" width="300">
  </div>

  <div>
    <img src="https://logicaprogrammabile.it/wp-content/uploads/2013/09/TMP36.png" alt="temp-arduino" width="700">
  </div>
</div>

---

# Codice

```c
#define TEMP A0

void setup() {
  pinMode(TEMP, INPUT);
  
  Serial.begin(9600);
}

void loop() {
  int temperatura = analogRead(TEMP);
  
  temperatura = ((temperatura * 0.00488) - 0.5) / 0.01;
  
  Serial.println(temperatura);
}
```

---

# Sensore di distanza ad ultrasuoni

Il sensore non ci da direttamente la misura della distanza dell’oggetto, ma lo si utilizza per emettere un treno di impulsi ad ultrasuoni. Gli impulsi sonori saranno propagati nell’ambiente circostante e, se incontrano uno ostacolo, torneranno indietro verso il sensore che li ha emessi. Per calcolare la distanza basterà fare la velocità del suono (343 m/s) per il tempo trascorso

<div flex>
  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKamYj9au9C1m-ruYoYv65zX2obLCDSDkNFMJrf2nv-kiX6PkyPaAKHRLP31ZO7R_offs&usqp=CAU" alt="sens-distanza" width="300">
  </div>

  <div>
    <img src="https://www.ismanettone.it/wp-content/uploads/2013/06/2wire_bb.png" alt="distanza-arduino" width="700">
  </div>
</div>

---

# Codice

```c
#define pinTrigger 11
#define pinEcho 12
void setup() {
  pinMode(pinTrigger, OUTPUT);
  pinMode(pinEcho, INPUT);
  Serial.begin(9600);
}
void loop() { 
  digitalWrite(pinTrigger, LOW);
  digitalWrite(pinTrigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(pinTrigger, LOW);
  float durata = pulseIn(pinEcho, HIGH);
  float distanza = durata / 58.31;
  Serial.print("distanza: ");
  if( durata > 38000 ){
    Serial.println("Fuori portata");
  }
  else{ 
    Serial.print(distanza); 
    Serial.println(" cm");
  }
  delay(100);
}
```