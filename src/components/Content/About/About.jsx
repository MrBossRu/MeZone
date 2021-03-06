import React, {useLayoutEffect} from "react";
import Aboutimg from "./img/about.jpg";
import Style from "./About.module.css"


export default function About() {
    return (
        <div>
            <h2>О нас</h2>
            <img src={Aboutimg} alt="" width="100%"/>
            <article>
                Образова́ние — это система воспитания и обучения личности, а также совокупность приобретаемых знаний,
                умений, навыков, ценностных установок, функций, опыта деятельности и компетенций[1].

                В широком смысле слова, образование — процесс или продукт формирования ума, характера и физических
                способностей личности. Поскольку у человека опыт одной особи не исчезает после её смерти, а
                накапливается в обществе благодаря развитому уму людей и их способности к коммуникации, накопление опыта
                позволило образоваться такому явлению как культура. Культура — это опыт не одной особи, а опыт общества
                в целом. Образование это и есть процесс передачи этих знаний, накопленных в культуре, новым поколениям.
                Образование целенаправленно осуществляется обществом через учебные заведения: детские сады, школы,
                колледжи, университеты и другие заведения, что, однако, не исключает возможность и самообразования,
                особенно в связи с широкой доступностью интернета[2].
            </article>
        </div>
    );
}