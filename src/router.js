import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Kebijakan from './pages/Kebijakan.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import FooterProduct from './layout/FooterProduct.vue'
import Products from './pages/Product.vue'
import NavbarProduct from './layout/NavbarProduct.vue'
import Tentang from './pages/Tentang.vue'
import Tarif from './pages/TarifBiaya.vue'
import HargaPas from './pages/HargaPas.vue'
import TawarBersama from './pages/TawarBersama.vue'
import Faq from './pages/Faq.vue'
import Larangan from './pages/Larangan.vue'
import SyaratKetentuan from './pages/Syarat.vue'
import KodeEtik from './pages/KodeEtik.vue'
import Contact from './pages/Contact.vue'
import Panduan from './pages/Panduan.vue'

Vue.use(Router);
export default new Router({
    linkExactActiveClass: 'active',

    routes: [
        {
            path: '/',
            name: 'index',
            components: { default: Index, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/kebijakan',
            name: 'kebijakan',
            components: { default: Kebijakan, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/products',
            name: 'products',
            components: { default: Products, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/tentang',
            name: 'tentang',
            components: { default: Tentang, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'white' }
            }
        },
        {
            path: '/tarif',
            name: 'tarif',
            components: { default: Tarif, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/hargapas',
            name: 'hargapas',
            components: { default: HargaPas, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/tawarbersama',
            name: 'tawarbersama',
            components: { default: TawarBersama, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/faq',
            name: 'faq',
            components: { default: Faq, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/laranganiklan',
            name: 'laranganiklan',
            components: { default: Larangan, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/syaratketentuan',
            name: 'syaratketentuan',
            components: { default: SyaratKetentuan, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/kodeetik',
            name: 'kodeetik',
            components: { default: KodeEtik, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/contact',
            name: 'contact',
            components: { default: Contact, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/panduan',
            name: 'panduan',
            components: { default: Panduan, header: NavbarProduct, footer: FooterProduct },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }

});