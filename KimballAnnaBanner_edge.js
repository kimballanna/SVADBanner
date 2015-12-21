/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'gochi-hand, sans-serif': '<script src=\"http://use.edgefonts.net/gochi-hand:n4:all.js\"></script>',
            'sansita-one, sans-serif': '<script src=\"http://use.edgefonts.net/sansita-one:n4:all.js\"></script>',
            'bree-serif, sans-serif': '<script src=\"http://use.edgefonts.net/bree-serif:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0', '0', '720px', '300px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
                        },
                        {
                            id: 'Animate',
                            type: 'text',
                            rect: ['22px', '22px', '197px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Animation",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Arch',
                            type: 'text',
                            rect: ['60px', '96px', '222px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Architecture",
                            align: "left",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Studio',
                            type: 'text',
                            rect: ['19px', '153px', '241px', '41px', 'auto', 'auto'],
                            opacity: '0.008129999972879887',
                            text: "Studio Art",
                            align: "left",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Film',
                            type: 'text',
                            rect: ['603px', '33px', '298px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Film",
                            align: "left",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Photo',
                            type: 'text',
                            rect: ['121px', '194px', '298px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Photography",
                            align: "left",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Game',
                            type: 'text',
                            rect: ['502px', '96px', '298px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Game Design",
                            align: "left",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Web',
                            type: 'text',
                            rect: ['382px', '163px', '197px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Web Design",
                            align: "left",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Graphic',
                            type: 'text',
                            rect: ['303px', '10px', '254px', '38px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Graphic Design",
                            align: "left",
                            font: ['sansita-one, sans-serif', [33, "px"], "rgba(251,198,8,1)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'slogan',
                            type: 'image',
                            rect: ['0', '24px', '720px', '300px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slogan.png",'0px','0px']
                        },
                        {
                            id: 'sCopy',
                            type: 'image',
                            rect: ['720px', '24px', '170px', '222px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"s.png",'0px','0px']
                        },
                        {
                            id: 'vCopy',
                            type: 'image',
                            rect: ['720px', '24px', '100px', '222px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"v.png",'0px','0px']
                        },
                        {
                            id: 'aCopy',
                            type: 'image',
                            rect: ['729px', '33px', '100px', '222px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
                        },
                        {
                            id: 'dCopy',
                            type: 'image',
                            rect: ['726px', '22px', '120px', '222px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"d.png",'0px','0px']
                        },
                        {
                            id: 'Apply',
                            type: 'text',
                            rect: ['528px', '190px', '170px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Apply Now!",
                            align: "left",
                            font: ['bree-serif, sans-serif', [33, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'ApplyCopy3',
                            type: 'text',
                            rect: ['528px', '190px', '170px', '52px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Apply Now!",
                            align: "left",
                            font: ['bree-serif, sans-serif', [33, "px"], "rgba(251,198,8,1.00)", "400", "none solid rgb(251, 198, 8)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['528px', '190px', '183px', '52px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '720px', '300px'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3930,
                    autoPlay: true,
                    data: [
                        [
                            "eid130",
                            "opacity",
                            1420,
                            0,
                            "easeInQuad",
                            "${Graphic}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid89",
                            "opacity",
                            1500,
                            750,
                            "easeInQuad",
                            "${Graphic}",
                            '0.000000',
                            '0.27'
                        ],
                        [
                            "eid90",
                            "opacity",
                            2250,
                            750,
                            "easeInQuad",
                            "${Graphic}",
                            '0.27',
                            '0.000000'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            250,
                            "easeOutQuad",
                            "${sCopy}",
                            '720px',
                            '140px'
                        ],
                        [
                            "eid116",
                            "opacity",
                            1750,
                            610,
                            "easeInQuad",
                            "${Studio}",
                            '0.008130',
                            '0.5'
                        ],
                        [
                            "eid117",
                            "opacity",
                            2360,
                            590,
                            "easeInQuad",
                            "${Studio}",
                            '0.5',
                            '0.008129999972879887'
                        ],
                        [
                            "eid22",
                            "left",
                            750,
                            250,
                            "easeOutQuad",
                            "${dCopy}",
                            '726px',
                            '459px'
                        ],
                        [
                            "eid111",
                            "opacity",
                            2835,
                            565,
                            "easeInQuad",
                            "${Film}",
                            '0.000000',
                            '0.46'
                        ],
                        [
                            "eid112",
                            "opacity",
                            3400,
                            530,
                            "easeInQuad",
                            "${Film}",
                            '0.46',
                            '0'
                        ],
                        [
                            "eid106",
                            "opacity",
                            1905,
                            725,
                            "easeInQuad",
                            "${Game}",
                            '0.000000',
                            '0.54'
                        ],
                        [
                            "eid107",
                            "opacity",
                            2630,
                            620,
                            "easeInQuad",
                            "${Game}",
                            '0.54',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            1665,
                            500,
                            "easeInQuad",
                            "${Photo}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid102",
                            "opacity",
                            2165,
                            630,
                            "easeInQuad",
                            "${Photo}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid121",
                            "opacity",
                            2630,
                            660,
                            "easeInQuad",
                            "${Arch}",
                            '0.000000',
                            '0.53'
                        ],
                        [
                            "eid122",
                            "opacity",
                            3290,
                            640,
                            "easeInQuad",
                            "${Arch}",
                            '0.53',
                            '0'
                        ],
                        [
                            "eid19",
                            "left",
                            500,
                            250,
                            "easeOutQuad",
                            "${aCopy}",
                            '729px',
                            '376px'
                        ],
                        [
                            "eid58",
                            "opacity",
                            1355,
                            145,
                            "easeInQuad",
                            "${Apply}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            1500,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid141",
                            "width",
                            1500,
                            0,
                            "easeInQuad",
                            "${Apply}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid20",
                            "background-position",
                            750,
                            0,
                            "easeOutQuad",
                            "${dCopy}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid126",
                            "opacity",
                            2000,
                            690,
                            "easeInQuad",
                            "${Animate}",
                            '0.000000',
                            '0.46'
                        ],
                        [
                            "eid127",
                            "opacity",
                            2690,
                            605,
                            "easeInQuad",
                            "${Animate}",
                            '0.46',
                            '0'
                        ],
                        [
                            "eid136",
                            "top",
                            1500,
                            0,
                            "easeInQuad",
                            "${Apply}",
                            '190px',
                            '190px'
                        ],
                        [
                            "eid135",
                            "top",
                            1500,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            '190px',
                            '190px'
                        ],
                        [
                            "eid96",
                            "opacity",
                            2500,
                            570,
                            "easeInQuad",
                            "${Web}",
                            '0.000000',
                            '0.57'
                        ],
                        [
                            "eid97",
                            "opacity",
                            3070,
                            725,
                            "easeInQuad",
                            "${Web}",
                            '0.57',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${slogan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "left",
                            250,
                            250,
                            "easeOutQuad",
                            "${vCopy}",
                            '720px',
                            '303px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("KimballAnnaBanner_edgeActions.js");
})("EDGE-102534779");
