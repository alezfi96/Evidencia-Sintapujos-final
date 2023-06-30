<template>
    <nav-comp></nav-comp>
    <body id="section_1" class="$Success">
        <div>

            

            <!-- <RegisterComp></RegisterComp>



            <login-comp></login-comp> -->




            <main class="principal">
                <section class="hero-section hero-section pb-5 mt-4">
                    <div class="container-fluid">
                        <div class="row">

                            <!--EMPIEZA CARRUSEL-->
                            <!-- <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                                <div class="carousel-inner ">
                                    <div class="carousel-item active  ">
                                        <img src="../assets/images/news/Bienestar-01.png" data-bs-interval="40000"
                                            class=" w-   mx-auto" height="410">
                                    </div>
                                    <div class="carousel-item  ">
                                        <img src="../assets/images/news/Welcome.jpg" data-bs-interval="40000"
                                            class=" w-  mx-auto" height="410">
                                    </div>
                                    <div class="carousel-item ">
                                        <img src="../assets/images/news/petro-sena-bachillerato.jpg"
                                            data-bs-interval="40000" class=" w-  mx-auto" height="410">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div> -->
                            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                                <div class="carousel-inner ">

                                    <div class="carousel-item active" v-for="imagen in imagenes" :key="imagen.id">
                                        <img :src="imagenUrl(imagen)" data-bs-interval="40000" class=" w-   mx-auto"
                                            height="410">
                                    </div>

                                    <div class="carousel-item active  ">
                                        <img src="../assets/images/news/Bienestar-01.png" data-bs-interval="40000"
                                            class=" w-   mx-auto" height="410">
                                    </div>
                                    <div class="carousel-item  ">
                                        <img src="../assets/images/news/Welcome.jpg" data-bs-interval="40000"
                                            class=" w-  mx-auto" height="410">
                                    </div>
                                    <div class="carousel-item ">
                                        <img src="../assets/images/news/petro-sena-bachillerato.jpg"
                                            data-bs-interval="40000" class=" w-  mx-auto" height="410">
                                    </div>

                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                            <!--TERMINA CARRUSEL-->

                        </div>
                    </div>
                </section>
                <div class="init">

                    <section class="section-padding section-bg mb-1 pt-1  pb-0" id="section_aprender">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-10 col-12 text-center mx-auto">
                                    <h2 class="mb-5">Bienvenido a SinTapujos</h2>
                                </div>

                                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div class="featured-block d-flex justify-content-center align-items-center">
                                        <a href="#" class="d-block custom-link">
                                            <img src="../assets/images/icons/libro.png"
                                                class="featured-block-image img-fluid" alt="">

                                            <p class="featured-block-text">Aumenta <strong>tu conocimiento</strong></p>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                                    <div class="featured-block d-flex justify-content-center align-items-center">
                                        <a href="#" class="d-block custom-link">
                                            <img src="../assets/images/icons/educacion-sexual.png"
                                                class="featured-block-image img-fluid" alt="">

                                            <p class="featured-block-text"><strong>Fomenta</strong> tu responsabilidad</p>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                                    <div class="featured-block d-flex justify-content-center align-items-center">
                                        <a href="#" class="d-block custom-link">
                                            <img src="../assets/images/icons/salud-mental.png"
                                                class="featured-block-image img-fluid" alt="">

                                            <p class="featured-block-text">Conéctate <strong>Con profesionales </strong></p>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div class="featured-block d-flex justify-content-center align-items-center">
                                        <a href="https://play.google.com/store/games?device=phone&hl=es_CO&gl=US"
                                            class="d-block custom-link">
                                            <img src="../assets/images/icons/rompecabezas.png"
                                                class="featured-block-image img-fluid" alt="">

                                            <p class="featured-block-text"><strong>Diviertete en nuestra </strong> AppMovil
                                            </p>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section class="section-padding section-bg d-flex justify-content-center" id="section_2">
                        <div class="container d-flex justify-content-center">
                            <div class="row d-flex justify-content-center ">
                                <!--DIVISION DE LA PARTE QUIENES SOMOS -->

                                <div class="col-lg-7 col-12">
                                    <div class="custom-text-box">
                                        <h2 class="mb-2">Quienes somos :</h2>

                                        <h5 class="mb-3">SinTapujos</h5>

                                        <p class="mb-0 text-start-defineapp" style="font-size: 20px;">Es una App que
                                            pretende
                                            contribuir a la educación
                                            sexual , con artículos educativos sobre derechos sexuales y reproductivos,
                                            métodos
                                            anticonceptivos,
                                            enfermedades
                                            de transmisión sexual, además encontraras un test que evaluará tus conocimientos
                                            sobre
                                            sexualidad .
                                            También tendrá la oportunidad de divertirte jugando y aprendiendo, todo con el
                                            fin
                                            de
                                            hacer más agradable , responsable y educativa la forma de aprender de sexulidad.
                                        </p>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 md-12 col-12">
                                            <div class="custom-text-box mb-lg-0">
                                                <h2 class="mb-3">Misión</h2>
                                                <p class="text-start-mision" style="font-size: 20px;">Crear una App web y
                                                    móvil
                                                    para los aprendices SENA
                                                    en su
                                                    etapa de adolescencia
                                                    con contenido educativo, servicios de calidad (psicología) y contribuir
                                                    al
                                                    ejercicio responsable de la sexualidad y reproducción en forma
                                                    satisfactoria
                                                    y con los menores riesgos posibles.
                                                </p>

                                            </div>
                                        </div>


                                        <div class="col-lg-6 md-12 col-12">
                                            <div class="custom-text-box mb-lg-0">
                                                <h2 class="mb-3">Visión</h2>

                                                <p class="text-start-vision" style="font-size: 20px;">Para el 2025 ser
                                                    garantes
                                                    en la prevención de enfermedades de transmisión sexual y embarazos no
                                                    deseados dentro de la población de Aprendices en su etapa de
                                                    adolescencia,
                                                    que les permita ejercer sus derechos sexuales y reproductivos.
                                                    <br>
                                                  
                                
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="botonfinal">

                            <button type="button" class="btn btn-outline-dark p-0" @click="scrollToTop"><span
                                    class="material-icons-outlined">
                                    arrow_upward
                                </span></button>
                        </div>


                    </section>
                </div>

                <section class="about-section section-padding pb-2">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-6 col-md-12 my-auto">
                                <img src="../assets/images/avatar/Logosimbolo-SENA-PRINCIPAL.png"
                                    class="about-image ms-lg-auto bg-light shadow-lg img-fluid" id="logosen" alt="80%">
                            </div>

                            <div class="col-lg-6 col-md-12 col-12">
                                <div class="custom-text-block">
                                    <h2 class="footer-sena mb-0">Sena C.T.P.I Popayán</h2>

                                    <p class="text-muted mb-lg-4 mb-md-4">ADSI 2452442</p>

                                    <p class="text-start-defineapp" style="font-size: 18px;">El SENA Popayán en la región
                                        Cauca se caracteriza por
                                        una
                                        complejidad por su enclave
                                        industrial en la zona norte y un desarrollo del sector terciario en el centro. Estas
                                        zonas tienen un índice de educación bajos por eso, la regional SENA Popayán ofrece
                                        muchos servicios para satisfacer todas las necesidades. Sus esfuerzos se basan en
                                        buscar
                                        oportunidades de empleo y mejorar la calidad de vida de los habitantes.
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <!-- <footer class="site-footer" id="antesdpie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-12 mb-4" href="">
                            <a href="#"> <img src="../assets/images/Logo1.png" class="img-footer" alt="" id="logopie"
                                    width="400"></a>
                        </div>


                        <div class="col-lg-4 col-md-6 col-12 mx-auto   ">
                            <div class="d-flex justify-content-start">
                                <h5 class="site-footer-title mb-2 text-dark fs-bold">Contactos de Información</h5>
                            </div>


                            <p class="text-white d-flex mb-2  ">
                                <i class="bi-telephone me-2 text-dark  fw-bold"></i>

                                <a href="tel: 320-654-6472" class="site-footer-link text-dark  fw-bold ">
                                    3207040392
                                </a>
                            </p>

                            <p class="text-white d-flex">
                                <i class="bi-envelope me-2 text-dark"></i>

                                <a href="mailto:info@yourgmail.com" class="site-footer-link  text-dark fw-bold">
                                    bienestaraprendizctpi@gmail.com
                                </a>
                            </p>

                            <p class="text-dark d-flex mt-3  fw-bold">
                                <i class="bi-geo-alt me-2 "></i>
                                Sena CTPI regional cauca, Popayán.
                            </p>

                            <div class="d-flex justify-content-start mt-2 pt-3">
                                <a href="#" class="btn btn-outline-success ms-4 btn-bd-primary">Volver a inicio</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="site-footer-bottom mt-0" id="divdepie">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                                <ul class="social-icon">
                                    <li class="social-icon-item">
                                        <a href="https://twitter.com/" class="social-icon-link bi-twitter"></a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="/inicio" class="social-icon-link bi-facebook"></a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="#" class="social-icon-link bi-instagram"></a>
                                    </li>


                                    <li class="social-icon-item">
                                        <a href="https://www.bing.com/videos/search?q=El+Sena&&view=detail&mid=A59273358E9A8CE43153A59273358E9A8CE43153&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3DEl%2BSena%26FORM%3DVRMHRS"
                                            class="social-icon-link bi-youtube"></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer> -->
            <footer-comp></footer-comp>
        </div>
    </body>
</template>

<script>

import NavComp from './NavComp.vue';
import FooterComp from './FooterComp.vue';

export default {
    name: 'HomeComp',
    components: {
        NavComp, FooterComp
    },
    data() {
        return {
            imagenes: []
        }

    },
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth' // Desplazamiento suave
                });
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Desplazamiento suave
            });
        }, async obtenerImagenes() {
            try {
                const response = await fetch('http://localhost:4000/imagenes');
                if (response.ok) {
                    const data = await response.json();
                    this.imagenes = data;
                } else {
                    console.error('Error al obtener las imágenes');
                }
            } catch (error) {
                console.error(error);
            }
        },
        imagenUrl(imagen) {
            if (imagen && imagen.imagen && imagen.imagen.data) {
                const imageBuffer = new Uint8Array(imagen.imagen.data);
                const base64Image = btoa(String.fromCharCode.apply(null, imageBuffer));
                return `data:image/jpg;base64,${base64Image}`;
            }
            return ''; // Devuelve una cadena vacía si no hay imagen o datos de imagen válidos
        }
    },
    mounted() {
        this.obtenerImagenes();
    }
}
</script>

<style scoped>
.init {
    background-color: #f0f8ff;
}

.botonfinal {

    text-align: right;
}

.btn-outline-success {
    border-radius: 20px;
}

.btn-bd-primary {
    font-weight: 600;
    color: #fff;
    background-color: #4BB5E7;
    border-color: #4BB5E7;

}

.btn-bd-primary:hover,
.btn-bd-primary:active {
    color: #fff;
    background-color: #61428f;
    border-color: #61428f;
}

.btn-bd-primary:focus {
    box-shadow: 0 0 0 3px rgba(179, 82, 174, 0.25)
}

.custom-link {
    text-decoration: none;
}

.text-start-defineapp {
    text-align: justify;

}

.text-start-mision {
    text-align: justify;
}

.text-start-vision {
    text-align: justify;
}

.footer-sena {
    font-size: 33px;
}</style>