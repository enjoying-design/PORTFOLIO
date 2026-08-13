document.addEventListener("DOMContentLoaded", function () {

    /* ====================================
       ELEMENT
    ===================================== */

    const progressBar = document.querySelector(".progress_bar");
    const header = document.querySelector("#header");
    const menuBtn = document.querySelector(".menu_btn");
    const gnbLinks = document.querySelectorAll(".gnb_link");
    const sections = document.querySelectorAll(".observe_section");


    /* ====================================
       AOS
    ===================================== */

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 120
        });

    }


    /* ====================================
       SCROLL PROGRESS
    ===================================== */

    function updateProgress() {

        if (!progressBar) {
            return;
        }

        const scrollTop = window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        progressBar.style.width = progress + "%";

    }


    /* ====================================
       ACTIVE GNB
    ===================================== */

    function updateActiveMenu() {

        if (sections.length === 0) {
            return;
        }

        const headerHeight =
            header ? header.offsetHeight : 0;

        const activePoint =
            headerHeight + 90;

        let currentSection = sections[0];


        sections.forEach(function (section) {

            const rect =
                section.getBoundingClientRect();

            if (
                rect.top <= activePoint &&
                rect.bottom > activePoint
            ) {

                currentSection = section;

            }

        });


        const isBottom =
            window.innerHeight +
            window.scrollY >=
            document.documentElement.scrollHeight - 5;


        if (isBottom) {

            currentSection =
                sections[sections.length - 1];

        }


        const currentId =
            currentSection.getAttribute("id");


        gnbLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentId
            ) {

                link.classList.add("active");

            }

        });

    }


    /* ====================================
       TOP BUTTON
    ===================================== */

    const topBtn = document.querySelector("#top_btn");


    function updateTopButton() {

        if (!topBtn) {
            return;
        }

        if (window.scrollY > 300) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }


    if (topBtn) {

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ====================================
       MAIN SCROLL
    ===================================== */

    function handleScroll() {

        updateProgress();

        updateActiveMenu();

        updateTopButton();

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        function () {

            updateProgress();

            updateActiveMenu();

            updateTopButton();


            if (typeof AOS !== "undefined") {

                AOS.refresh();

            }

        }
    );


    handleScroll();


    /* ====================================
       MOBILE MENU
    ===================================== */

    if (menuBtn && header) {

        menuBtn.addEventListener("click", function () {

            header.classList.toggle("menu_open");

        });

    }


    /* ====================================
       GNB SMOOTH SCROLL
    ===================================== */

    gnbLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();


            const targetId =
                this.getAttribute("href");


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            let targetPosition = 0;


            if (targetId !== "#banner") {

                const headerHeight =
                    header ? header.offsetHeight : 0;

                const sectionTitle =
                    target.querySelector(".section_title");

                const scrollTarget =
                    sectionTitle || target;

                const extraGap =
                    window.innerWidth <= 768
                        ? 20
                        : 35;

                targetPosition =
                    scrollTarget.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    extraGap;

            }


            window.scrollTo({

                top: Math.max(
                    0,
                    targetPosition
                ),

                behavior: "smooth"

            });


            if (header) {

                header.classList.remove("menu_open");

            }

        });

    });


    /* ====================================
       INTERVIEW ACCORDION
    ===================================== */

    const interviewItems =
        document.querySelectorAll(".interview_item");


    interviewItems.forEach(function (item) {

        const question =
            item.querySelector(".interview_question");

        const plus =
            item.querySelector(".interview_plus");


        if (!question || !plus) {
            return;
        }


        question.addEventListener("click", function () {

            const isActive =
                item.classList.contains("active");


            interviewItems.forEach(function (otherItem) {

                otherItem.classList.remove("active");


                const otherPlus =
                    otherItem.querySelector(".interview_plus");


                if (otherPlus) {

                    otherPlus.textContent = "+";

                }

            });


            if (!isActive) {

                item.classList.add("active");

                plus.textContent = "−";

            }

        });

    });


    /* ====================================
       VISUAL SWIPER 01
    ===================================== */

    const visualSwiper01 =
        document.querySelector(".visualSwiper01");


    if (
        visualSwiper01 &&
        typeof Swiper !== "undefined"
    ) {

        const visualGroup01 =
            visualSwiper01.closest(".visual_group");


        new Swiper(visualSwiper01, {

            speed: 800,

            grabCursor: true,

            watchOverflow: true,

            observer: true,

            observeParents: true,


            breakpoints: {

                0: {
                    slidesPerView: 1.15,
                    spaceBetween: 14
                },

                640: {
                    slidesPerView: 2.2,
                    spaceBetween: 16
                },

                1024: {
                    slidesPerView: 4.3,
                    spaceBetween: 20
                }

            },


            navigation: {

                nextEl:
                    visualGroup01
                        ? visualGroup01.querySelector(
                            ".visual01_next"
                        )
                        : null,

                prevEl:
                    visualGroup01
                        ? visualGroup01.querySelector(
                            ".visual01_prev"
                        )
                        : null

            }

        });

    }


    /* ====================================
       VISUAL SWIPER 02
    ===================================== */

    const visualSwiper02 =
        document.querySelector(".visualSwiper02");


    if (
        visualSwiper02 &&
        typeof Swiper !== "undefined"
    ) {

        const visualGroup02 =
            visualSwiper02.closest(".visual_group");


        new Swiper(visualSwiper02, {

            speed: 800,

            grabCursor: true,

            watchOverflow: true,

            observer: true,

            observeParents: true,


            breakpoints: {

                0: {
                    slidesPerView: 1.15,
                    spaceBetween: 14
                },

                640: {
                    slidesPerView: 2.2,
                    spaceBetween: 16
                },

                1024: {
                    slidesPerView: 4.3,
                    spaceBetween: 20
                }

            },


            navigation: {

                nextEl:
                    visualGroup02
                        ? visualGroup02.querySelector(
                            ".visual02_next"
                        )
                        : null,

                prevEl:
                    visualGroup02
                        ? visualGroup02.querySelector(
                            ".visual02_prev"
                        )
                        : null

            }

        });

    }


    /* ====================================
       POSTER SWIPER
    ===================================== */

    const posterSwiper =
        document.querySelector(".posterSwiper");


    if (
        posterSwiper &&
        typeof Swiper !== "undefined"
    ) {

        const posterGroup =
            posterSwiper.closest(".visual_group");


        new Swiper(posterSwiper, {

            speed: 800,

            grabCursor: true,

            watchOverflow: true,

            observer: true,

            observeParents: true,


            breakpoints: {

                0: {
                    slidesPerView: 1.15,
                    spaceBetween: 14
                },

                640: {
                    slidesPerView: 2.2,
                    spaceBetween: 16
                },

                1024: {
                    slidesPerView: 4.3,
                    spaceBetween: 20
                }

            },


            navigation: {

                nextEl:
                    posterGroup
                        ? posterGroup.querySelector(
                            ".poster_next"
                        )
                        : null,

                prevEl:
                    posterGroup
                        ? posterGroup.querySelector(
                            ".poster_prev"
                        )
                        : null

            }

        });

    }


    /* ====================================
       VISUAL POPUP ELEMENT
    ===================================== */

    const popupWrap =
        document.querySelector("#visual_popup");

    const popupGallery =
        document.querySelector(".popup_gallery");

    const popupCloseBtn =
        document.querySelector(".popup_close");

    const popupPrevBtn =
        document.querySelector(".popup_prev");

    const popupNextBtn =
        document.querySelector(".popup_next");

    const popupVisualGroups =
        document.querySelectorAll(
            "#visual .visual_group"
        );


    let popupCurrentItems = [];

    let popupCurrentIndex = 0;


    /* ====================================
       POPUP IMAGE PATH
    ===================================== */

    function getPopupImages(item) {

        const dataImages =
            item.dataset.images;


        if (dataImages) {

            return dataImages
                .split("|")
                .map(function (path) {

                    return path.trim();

                })
                .filter(function (path) {

                    return path !== "";

                });

        }


        const thumbnail =
            item.querySelector("img");


        if (!thumbnail) {

            return [];

        }


        return [
            thumbnail.currentSrc ||
            thumbnail.src
        ];

    }


    /* ====================================
       POPUP GALLERY
    ===================================== */

    function renderPopupGallery() {

        if (
            !popupGallery ||
            popupCurrentItems.length === 0
        ) {

            return;

        }


        const currentItem =
            popupCurrentItems[
                popupCurrentIndex
            ];


        const imagePaths =
            getPopupImages(currentItem);


        popupGallery.innerHTML = "";

        popupGallery.className =
            "popup_gallery";


        const imageCount =
            imagePaths.length;


        if (
            imageCount >= 1 &&
            imageCount <= 4
        ) {

            popupGallery.classList.add(
                "count-" + imageCount
            );

        }


        const thumbnail =
            currentItem.querySelector("img");


        imagePaths.forEach(function (path, index) {

            const image =
                document.createElement("img");


            image.src = path;


            image.alt =
                thumbnail
                    ? thumbnail.alt +
                      " 상세 이미지 " +
                      (index + 1)
                    : "상세 이미지 " +
                      (index + 1);


            popupGallery.appendChild(image);

        });

    }


    /* ====================================
       OPEN POPUP
    ===================================== */

    function openVisualPopup(items, index) {

        if (
            !popupWrap ||
            !popupGallery ||
            items.length === 0
        ) {

            return;

        }


        popupCurrentItems =
            Array.from(items);


        popupCurrentIndex =
            index;


        renderPopupGallery();


        popupWrap.classList.add("open");

        document.body.classList.add(
            "popup_open"
        );

    }


    /* ====================================
       CLOSE POPUP
    ===================================== */

    function closeVisualPopup() {

        if (!popupWrap) {
            return;
        }


        popupWrap.classList.remove("open");

        document.body.classList.remove(
            "popup_open"
        );


        if (popupGallery) {

            popupGallery.innerHTML = "";

            popupGallery.className =
                "popup_gallery";

        }


        popupCurrentItems = [];

        popupCurrentIndex = 0;

    }


    /* ====================================
       PREV WORK
    ===================================== */

    function showPrevPopupWork() {

        if (
            popupCurrentItems.length === 0
        ) {

            return;

        }


        popupCurrentIndex--;


        if (popupCurrentIndex < 0) {

            popupCurrentIndex =
                popupCurrentItems.length - 1;

        }


        renderPopupGallery();

    }


    /* ====================================
       NEXT WORK
    ===================================== */

    function showNextPopupWork() {

        if (
            popupCurrentItems.length === 0
        ) {

            return;

        }


        popupCurrentIndex++;


        if (
            popupCurrentIndex >=
            popupCurrentItems.length
        ) {

            popupCurrentIndex = 0;

        }


        renderPopupGallery();

    }


    /* ====================================
       VISUAL ITEM CLICK
    ===================================== */

    popupVisualGroups.forEach(function (group) {

        /*
        링크로 이동하는 visual_item은 팝업 대상에서 제외합니다.
        예: ABC마트 프로모션 링크
        */
        const groupItems =
            Array.from(
                group.querySelectorAll(".visual_item")
            ).filter(function (item) {

                return !item.closest("a[href]");

            });


        groupItems.forEach(function (item, index) {

            item.addEventListener("click", function () {

                openVisualPopup(
                    groupItems,
                    index
                );

            });

        });

    });


    /* ====================================
       POPUP PREV
    ===================================== */

    if (popupPrevBtn) {

        popupPrevBtn.addEventListener(
            "click",
            function (e) {

                e.stopPropagation();

                showPrevPopupWork();

            }
        );

    }


    /* ====================================
       POPUP NEXT
    ===================================== */

    if (popupNextBtn) {

        popupNextBtn.addEventListener(
            "click",
            function (e) {

                e.stopPropagation();

                showNextPopupWork();

            }
        );

    }


    /* ====================================
       POPUP CLOSE
    ===================================== */

    if (popupCloseBtn) {

        popupCloseBtn.addEventListener(
            "click",
            function (e) {

                e.stopPropagation();

                closeVisualPopup();

            }
        );

    }


    /* ====================================
       POPUP BACKGROUND CLICK
    ===================================== */

    if (popupWrap) {

        popupWrap.addEventListener(
            "click",
            function (e) {

                if (e.target === popupWrap) {

                    closeVisualPopup();

                }

            }
        );

    }


    /* ====================================
       KEYBOARD
    ===================================== */

    document.addEventListener(
        "keydown",
        function (e) {

            if (
                !popupWrap ||
                !popupWrap.classList.contains(
                    "open"
                )
            ) {

                return;

            }


            if (e.key === "Escape") {

                closeVisualPopup();

            }


            if (e.key === "ArrowLeft") {

                showPrevPopupWork();

            }


            if (e.key === "ArrowRight") {

                showNextPopupWork();

            }

        }
    );


    /* ====================================
       IMAGE LOAD 후 AOS 위치 보정
    ===================================== */

    window.addEventListener("load", function () {

        if (typeof AOS !== "undefined") {

            AOS.refresh();

        }

        updateProgress();

        updateActiveMenu();

        updateTopButton();

    });

});