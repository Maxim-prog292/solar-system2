import * as THREE from "three";
import { OrbitControls } from "OrbitControls";
import { CSS2DRenderer, CSS2DObject } from "CSS2DRenderer";

const planetButton = document.querySelectorAll(".planet_button");
const descriptionHeader = document.querySelector(".description_header");
const descriptionParagraph = document.querySelector(".description_paragraph");
const load = document.querySelector(".load");
const liv = document.querySelector(".leave");

liv.addEventListener("click", () => {
  location.href = "https://maxim-prog292.github.io/Game-selection/";
});

setTimeout(() => {
  load.style = "display: none;";
}, 5000);

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.intensity = 100;
let helper;

function focusOnPlanet(planetMesh, x, z, y = 0) {
  const targetPosition = new THREE.Vector3();
  planetMesh.getWorldPosition(targetPosition);
  console.log(planetMesh.getWorldPosition(targetPosition));
  const direction = targetPosition.clone().sub(camera.position).normalize();
  const cameraTarget = targetPosition.clone().add(direction.multiplyScalar(10));

  gsap.to(camera.position, {
    duration: 5,
    x: cameraTarget.x - x,
    y: 0,
    z: cameraTarget.z - z,
    onUpdate: () => {
      camera.lookAt(targetPosition);
      // spotLight.lookAt(camera.position);
    },
  });
  // spotLight.position.set(cameraTarget.x, 0, cameraTarget.z);
  // helper = new THREE.SpotLightHelper(spotLight);
  // scene.add(spotLight);
  // scene.add(helper);
}
// Math.sin(x)
function setHeader(header) {
  descriptionHeader.textContent = header;
}
function setPar(par) {
  descriptionParagraph.innerHTML = par;
}
planetButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("planet_button")) {
      switch (e.target.classList[1]) {
        case "sun":
          focusOnPlanet(sun, 75, -5, 25);
          setHeader("Солнце");
          setPar(`Со́лнце — одна из звёзд нашей галактики (Млечный Путь) и единственная звезда Солнечной системы. Вокруг Солнца обращаются другие объекты этой системы: планеты и их спутники, карликовые планеты и их спутники, астероиды, метеороиды, кометы и космическая пыль.<br/><br/>
                  По спектральной классификации Солнце относится к типу G (жёлтый карлик), и подклассом 2V, или же к полному спектральному классу G2V. Средняя плотность Солнца составляет 1,4 г/см³ (в 1,4 раза больше, чем у воды). Эффективная температура поверхности Солнца — 5780 кельвинов (5506 °С). 
                  Поэтому Солнце светит почти белым светом, но прямой свет Солнца у поверхности нашей планеты приобретает некоторый жёлтый оттенок из-за более сильного рассеяния и поглощения коротковолновой части спектра атмосферой Земли (при ясном небе, смешиваясь с голубым рассеянным светом от неба, солнечный свет вновь даёт белое освещение).<br/><br/>
                  Солнечное излучение поддерживает жизнь на Земле (свет необходим для начальных стадий фотосинтеза или световой фазы), определяет климат. Светимость Солнца (суммарное количество энергии, выделяемое Солнцем за одну секунду) L⊙ = 3,827⋅10<sup>26</sup> Вт.`);
          break;
        case "merc":
          focusOnPlanet(mercury.mesh, 15, -10);
          setHeader("Меркурий");
          setPar(
            `Мерку́рий — наименьшая планета Солнечной системы и самая близкая к Солнцу. Названа в честь древнеримского бога торговли — быстрого Меркурия, поскольку она движется по небу быстрее других планет. Её период обращения вокруг Солнца составляет всего 87,97 земных суток — самый короткий среди всех планет Солнечной системы.
            <br><br>
            Видимое расстояние Меркурия от Солнца, если смотреть с Земли, никогда не превышает 28°. Эта близость к Солнцу означает, что планету можно увидеть только в течение небольшого времени после захода или до восхода солнца, обычно в сумерках. В телескоп у Меркурия можно увидеть фазы, изменяющиеся от тонкого серпа до почти полного диска, как у Венеры и Луны, а иногда он проходит по диску Солнца. Период изменения фаз Меркурия равен синодическому периоду его обращения — примерно 116 дней.`
          );
          break;
        case "venus":
          focusOnPlanet(venus.mesh, 20, -10);
          setHeader("Венера");
          setPar(`
            Вене́ра — вторая по удалённости от Солнца и шестая по размеру планета Солнечной системы, наряду с Меркурием, Землёй и Марсом принадлежащая к семейству планет земной группы. Названа в честь древнеримской богини любви Венеры. По ряду характеристик — например, по массе и размерам — Венера считается «сестрой» Земли. Венерианский год составляет 224,7 земных суток. Она имеет самый длинный период вращения вокруг своей оси (около 243 земных суток, в среднем 243,0212 ± 0,00006 сут) среди всех планет Солнечной системы и вращается в направлении, противоположном направлению вращения большинства планет.
            <br><br>
            Венера не имеет естественных спутников. На земном небе Венера является третьим по яркости светилом после Солнца и Луны. Её яркость достигает видимой звёздной величины −4,6m и является достаточной, чтобы ночью отбрасывать различимые тени. Изредка Венера видна невооружённым глазом и в светлое время суток.
            `);
          break;
        case "earth":
          focusOnPlanet(earth.mesh, 25, -10);
          setHeader("Земля");
          setPar(`Земля́ — третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру и массе среди всех планет Солнечной системы и крупнейшая среди планет земной группы, в которую входят также Меркурий, Венера и Марс. Единственное известное человеку в настоящее время тело во Вселенной, населённое живыми организмами.
            <br><br>
            В публицистике и научно-популярной литературе могут использоваться синонимические термины — мир, голубая планета, Терра (от лат. Terra).
            <br><br>
            Научные данные указывают на то, что Земля образовалась из солнечной туманности около 4,54 миллиарда лет назад и вскоре после этого обрела свой единственный естественный спутник — Луну. Жизнь, предположительно, появилась на Земле примерно 4,25 млрд лет назад, то есть вскоре после её возникновения. <br /><br />С тех пор биосфера Земли значительно изменила атмосферу и прочие абиотические факторы, обусловив количественный рост аэробных организмов, а также формирование озонового слоя, который вместе с магнитным полем Земли ослабляет вредную для жизни солнечную радиацию, тем самым сохраняя условия существования жизни на Земле. Радиация, обусловленная самой земной корой, со времён её образования значительно снизилась благодаря постепенному распаду радионуклидов, содержавшихся в ней. Кора Земли разделена на несколько сегментов, или тектонических плит, которые движутся по поверхности со скоростями порядка нескольких сантиметров в год. Изучением состава, строения и закономерностей развития Земли занимается наука геология.
            `);
          break;
        case "mars":
          focusOnPlanet(mars.mesh, 20, -10);
          setHeader("Марс");
          setPar(`Марс — четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы. Наряду с Меркурием, Венерой и Землёй принадлежит к семейству планет земной группы. Названа в честь Марса — древнеримского бога войны, соответствующего древнегреческому Аресу. Из-за красноватого оттенка поверхности, придаваемого ей минералом маггемитом — γ-оксидом железа, Марс называют Красной планетой.
            <br><br>
            Марс хорошо виден с Земли невооружённым глазом. Его видимая звёздная величина достигает −2,94m (при максимальном сближении с Землёй). Марс уступает по яркости лишь Юпитеру (во время великого противостояния Марса он может превзойти Юпитер), Венере, Луне и Солнцу. Противостояние Марса можно наблюдать каждые два года.
            <br><br>
            У Марса есть два естественных спутника — Фобос и Деймос (в переводе с древнегреческого — «страх» и «ужас», имена двух сыновей Ареса, сопровождавших его в бою), которые относительно малы (Фобос — 26,8×22,4×18,4 км, Деймос — 15×12,2×10,4 км) и имеют неправильную форму.
            `);
          break;
        case "jupiter":
          focusOnPlanet(jupiter.mesh, 35, -10);
          setHeader("Юпитер");
          setPar(`
            Юпи́тер — самая большая планета в Солнечной системе, пятая по удалённости от Солнца. Наряду с Сатурном Юпитер классифицируется как газовый гигант.
            <br><br>
            Планета была известна людям с глубокой древности, что нашло своё отражение в мифологии и религиозных верованиях различных культур: месопотамской, вавилонской, греческой и других. Современное название Юпитера происходит от имени древнеримского верховного бога-громовержца.
            <br><br>
            Ряд атмосферных явлений на Юпитере — штормы, молнии, полярные сияния, — имеют масштабы, на порядки превосходящие земные. Примечательным образованием в атмосфере является Большое красное пятно — гигантский шторм, известный с XIX (а возможно, и с XVII) века.
            <br><br>
            Юпитер имеет по крайней мере 95 спутников, первые и самые крупные из которых — Ио, Европа, Ганимед и Каллисто — были открыты Галилео Галилеем в 1610 году.
            `);
          break;
        case "saturn":
          focusOnPlanet(saturn.mesh, 30, -10, 20);
          setHeader("Сатурн");
          setPar(`
            Сату́рн — шестая планета по удалённости от Солнца и вторая по размерам планета в Солнечной системе после Юпитера. Сатурн классифицируется как газовый гигант. Планета названа в честь римского бога земледелия. Астрономический символ Сатурна — ♄.
            <br><br>
            В основном Сатурн состоит из водорода, с примесями гелия и следами воды, метана, аммиака и тяжёлых элементов. Внутренняя область представляет собой относительно небольшое ядро из железа, никеля и ряда других веществ («льдов»), покрытое тонким слоем металлического водорода и газообразным внешним слоем. Внешняя атмосфера планеты кажется из космоса спокойной и однородной, хотя иногда на ней появляются долговременные образования. Скорость ветра на Сатурне может достигать местами 1800 км/ч, что значительно больше, чем на Юпитере.
            <br><br>
            У Сатурна имеется планетарное магнитное поле, занимающее промежуточное положение по напряжённости между магнитным полем Земли и мощным полем Юпитера. Магнитное поле Сатурна простирается на 1 000 000 километров в направлении Солнца. Ударная волна была зафиксирована «Вояджером-1» на расстоянии в 26,2 радиуса Сатурна от самой планеты, магнитопауза расположена на расстоянии в 22,9 радиуса.
            `);
          break;
        case "uranus":
          focusOnPlanet(uranus.mesh, 20, -10);
          setHeader("Уран");
          setPar(`Ура́н — планета Солнечной системы, седьмая по удалённости от Солнца, третья по диаметру и четвёртая по массе. Была открыта в 1781 году английским астрономом Уильямом Гершелем и названа в честь греческого бога неба Урана.
          <br><br>
          Уран стал первой планетой, обнаруженной в Новое время и при помощи телескопа. Его открыл Уильям Гершель 13 марта 1781 года, тем самым впервые со времён античности расширив границы Солнечной системы в глазах человека. Несмотря на то, что порой Уран различим невооружённым глазом, более ранние наблюдатели принимали его за тусклую звезду.
          <br><br>
          В отличие от газовых гигантов — Сатурна и Юпитера, состоящих в основном из водорода и гелия, в недрах Урана и схожего с ним Нептуна отсутствует металлический водород, но зато много льда в его высокотемпературных модификациях. По этой причине специалисты выделили эти две планеты в отдельную категорию «ледяных гигантов». Основу атмосферы Урана составляют водород и гелий. Кроме того, в ней обнаружены следы метана и других углеводородов, а также облака изо льда, твёрдого аммиака и водорода. Это самая холодная планетарная атмосфера Солнечной системы с минимальной температурой в 49 К (−224 °C). Полагают, что Уран имеет сложное слоистое строение облаков, где вода составляет нижний слой, а метан — верхний. Недра Урана состоят в основном изо льдов и горных пород.
          `);
          break;
        case "neptune":
          focusOnPlanet(neptune.mesh, 17, -10);
          setHeader("Нептун");
          setPar(`Непту́н — восьмая и самая дальняя от Солнца планета Солнечной системы. Его масса превышает массу Земли в 17,2 раза и является третьей среди планет Солнечной системы, а по экваториальному диаметру Нептун занимает четвёртое место, превосходя Землю в 3,9 раза. Планета названа в честь Нептуна — римского бога морей.
          <br><br>
          Обнаружен 23 сентября 1846 года, став первой планетой, открытой благодаря математическим расчётам. Обнаружение непредсказуемых изменений орбиты Урана породило гипотезу о неизвестной планете, гравитационным возмущающим влиянием которой они и обусловлены. Нептун был найден в пределах предсказанной орбиты. Вскоре был открыт его крупнейший спутник Тритон, а в 1949 году — Нереида. Нептун посещался лишь одним космическим аппаратом, «Вояджером-2», который пролетел вблизи планеты 24—25 августа 1989 года. С его помощью были открыты кольца Нептуна и 6 его спутников. Остальные известные спутники Нептуна открыты в XXI веке.
          <br><br>
          Нептун по составу близок к Урану, и обе планеты отличаются от более крупных планет-гигантов — Юпитера и Сатурна. Иногда Уран и Нептун помещают в отдельную категорию «ледяных гигантов». Атмосфера Нептуна, подобно атмосфере Юпитера и Сатурна, состоит в основном из водорода и гелия, наряду со следами углеводородов и, возможно, азота, однако содержит более высокую долю воды, аммиака и метана. Недра Нептуна и Урана состоят главным образом изо «льдов» и камня. Следы метана во внешних слоях атмосферы являются причиной синего цвета планеты.
          `);
          break;
        case "system":
          focusOnPlanet(sun, -150, 60, 200);
          setHeader("Солнечная система");
          setPar(`Солнечная система — планетная система, включающая в себя центральную
        звезду Солнце и все естественные космические объекты на
        гелиоцентрических орбитах. Она сформировалась путём гравитационного
        сжатия газопылевого облака примерно 4,57 млрд лет назад.<br /><br />
        Четыре ближайшие к Солнцу планеты, называемые планетами земной группы, —
        Меркурий, Венера, Земля и Марс — состоят в основном из силикатов и
        металлов. Четыре более удалённые от Солнца планеты, называемые
        планетами-гигантами, — Юпитер, Сатурн, Уран и Нептун — намного более
        массивны, чем планеты земной группы. <br /><br />Крупнейшие
        планеты-гиганты, входящие в состав Солнечной системы, — Юпитер и Сатурн
        — состоят главным образом из водорода и гелия и поэтому относятся к
        газовым гигантам; меньшие планеты-гиганты — Уран и Нептун — помимо
        водорода и гелия, преимущественно содержат воду, метан и аммиак, такие
        планеты выделяются в отдельный класс «ледяных гигантов».
        <br /><br />Шесть планет из восьми и четыре карликовые планеты имеют
        естественные спутники. Юпитер, Сатурн, Уран и Нептун окружены кольцами
        пыли и других частиц.`);
          break;

        default:
          break;
      }
    }
  });
});
// merc.addEventListener("click", () => {
//   focusOnPlanet(mercury.mesh);
// });

const SUN_SIZE = 30;

const MERC_SIZE = 1;
const MERC_ORBIT = 100;
const MERC_SPEED = 0.004;

const VENUS_SIZE = 3;
const VENUS_ORBIT = 160;

const EARTH_SIZE = 3.2;
const EARTH_ORBIT = 220;

const MARS_SIZE = 2;
const MARS_ORBIT = 290;

const JUPITER_SIZE = 10;
const SATURN_SIZE = 8;
const URAN_SIZE = 5;
const NEPTUNE_SIZE = 5;

const starsTexture = "./image/stars.jpg";
const sunTexture = "./image/sun.jpg";
const mercuryTexture = "./image/2k_mercury.jpg";
const moonTexture = "./image/2k_moon.jpg";
const venusTexture = "./image/venus.jpg";
const earthTexture = "./image/earth.jpg";
const marsTexture = "./image/mars.jpg";
const jupiterTexture = "./image/jupiter.jpg";
const saturnTexture = "./image/saturn.jpg";
const saturnRingTexture = "./image/saturnRings.png";
const uranusTexture = "./image/uranus.jpg";
const uranusRingTexture = "./image/uranusRing.png";
const neptuneTexture = "./image/neptune.jpg";

// let labelRenderer;
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enabled = false;
camera.rotateX(-0.25);
camera.position.set(-150, 60, 200);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x111111, 100);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
]);

const textureLoader = new THREE.TextureLoader();

const sunGeo = new THREE.SphereGeometry(SUN_SIZE, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture),
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

const sunDiv = document.createElement("div");
sunDiv.className = "label";
sunDiv.textContent = "Солнце";
sunDiv.style.backgroundColor = "transparent";
sunDiv.style.color = "white";

// const sunLabel = new CSS2DObject( sunDiv );
// sunLabel.position.set( -12, 40, 0 );
// sunLabel.center.set( 0, 1 );
// scene.add( sunLabel );
// sunLabel.layers.set( 0 );

// labelRenderer = new CSS2DRenderer();
// labelRenderer.setSize( window.innerWidth, window.innerHeight );
// labelRenderer.domElement.style.position = 'absolute';
// labelRenderer.domElement.style.top = '0px';
// document.body.appendChild( labelRenderer.domElement );

function createPlanete(size, texture, position, ring) {
  const geo = new THREE.SphereGeometry(size, 30, 30);
  const mat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(texture),
  });
  const mesh = new THREE.Mesh(geo, mat);
  const obj = new THREE.Object3D();
  obj.add(mesh);
  if (ring) {
    const ringGeo = new THREE.RingGeometry(
      ring.innerRadius,
      ring.outerRadius,
      32
    );
    const ringMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(ring.texture),
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    obj.add(ringMesh);
    ringMesh.position.x = position;
    if (ring.texture == uranusRingTexture) {
      ringMesh.rotation.x = 90 * Math.PI;
      ringMesh.rotation.y = 10;
    } else {
      ringMesh.rotation.x = -0.5 * Math.PI;
    }
  }
  scene.add(obj);
  mesh.position.x = position;
  return { mesh, obj };
}
function createSteroids(size, positionX, positionZ, positionY, detail) {
  const geo = new THREE.TetrahedronGeometry(size, detail);
  const mat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(mercuryTexture),
  });
  const mesh = new THREE.Mesh(geo, mat);
  const obj = new THREE.Object3D();
  obj.add(mesh);
  scene.add(obj);
  mesh.position.x = positionX;
  mesh.position.z = positionZ;
  mesh.position.y = positionY;

  return { mesh, obj };
}
function addLabel(labelText, planetMesh) {
  const labelDiv = document.createElement("div");
  labelDiv.className = "label";
  labelDiv.textContent = labelText;

  const label = new CSS2DObject(labelDiv);
  label.position.set(0, planetMesh.geometry.parameters.radius + 13, 0);
  label.center.set(0.5, 0);
  planetMesh.add(label);
}

let asteroids = [];
const SIZE = 0.1;
for (let i = 0; i < 100; i++) {
  let R = 300 + Math.random() * 20;
  let angle = (Math.round(Math.random() * 360) * Math.PI) / 180;
  let positionZ = R * Math.sin(angle);
  let positionX = R * Math.cos(angle);
  let positionY = Math.random() * (2 - 5) + 2;
  let detail = Math.round(Math.random() * (2 - 4) + 2);

  asteroids.push(
    createSteroids(
      Math.random() * SIZE,
      positionX,
      positionZ,
      positionY,
      detail
    )
  );
}

const moon = new THREE.SphereGeometry(0.2, 30, 30);
const matMoon = new THREE.MeshStandardMaterial({
  map: textureLoader.load(moonTexture),
});
const meshMoon = new THREE.Mesh(moon, matMoon);
meshMoon.position.x = 10;

// scene.fog = new THREE.Fog(0x333333, 0.1, 100);

const mercury = createPlanete(MERC_SIZE, mercuryTexture, MERC_ORBIT);
const venus = createPlanete(VENUS_SIZE, venusTexture, VENUS_ORBIT);
const earth = createPlanete(EARTH_SIZE, earthTexture, EARTH_ORBIT);
earth.mesh.add(meshMoon);
const mars = createPlanete(MARS_SIZE, marsTexture, MARS_ORBIT);
const jupiter = createPlanete(JUPITER_SIZE, jupiterTexture, 380);
const saturn = createPlanete(SATURN_SIZE, saturnTexture, 440, {
  innerRadius: 11,
  outerRadius: 19,
  texture: saturnRingTexture,
});
const uranus = createPlanete(URAN_SIZE, uranusTexture, 580, {
  innerRadius: 6.5,
  outerRadius: 7,
  texture: uranusRingTexture,
});
const neptune = createPlanete(NEPTUNE_SIZE, neptuneTexture, 700);

addLabel("Меркурий", mercury.mesh);
addLabel("Венера", venus.mesh);
addLabel("Земля", earth.mesh);
addLabel("Марс", mars.mesh);
addLabel("Юпитер", jupiter.mesh);
addLabel("Сатурн", saturn.mesh);
addLabel("Уран", uranus.mesh);
addLabel("Нептун", neptune.mesh);

const pointLight = new THREE.PointLight(0xffffff, 10000, 9000);

scene.add(pointLight);

function animate() {
  asteroids.forEach((aster) => {
    aster.obj.rotateY(Math.random() / 1000);
  });
  // Self-rotation
  sun.rotateY(0.002);
  mercury.mesh.rotateY(0.001);
  venus.mesh.rotateY(-0.002);
  earth.mesh.rotateY(0.002);
  mars.mesh.rotateY(0.001);
  jupiter.mesh.rotateY(0.001);
  saturn.mesh.rotateY(0.001);
  uranus.mesh.rotateZ(0.001);
  neptune.mesh.rotateY(0.001);

  // //Around-sun-rotation
  // mercury.obj.rotateY(MERC_SPEED);
  // venus.obj.rotateY(0.003);
  // earth.obj.rotateY(0.0035);
  // mars.obj.rotateY(0.004);
  // moon.rotateY(0.0009);
  // jupiter.obj.rotateY(0.002);
  // saturn.obj.rotateY(0.0009);
  // uranus.obj.rotateY(0.0004);
  // neptune.obj.rotateY(0.0001);
  // geometry.rotateZ(0.001);
  renderer.render(scene, camera);
  // labelRenderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
