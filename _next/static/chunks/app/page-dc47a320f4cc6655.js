(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    4176: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 8985))
    }
    ,
    8985: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => E
        });
        var a = s(5155)
          , r = s(1539)
          , l = s(3127)
          , i = s(9803)
          , n = s(5525)
          , o = s(9621)
          , d = s(668)
          , c = s(2657)
          , m = s(1366)
          , x = s(1788)
          , u = s(7580)
          , h = s(5196)
          , p = s(4416)
          , b = s(4788)
          , f = s(6474)
          , g = s(2115)
          , v = s(4624)
          , j = s(2085)
          , w = s(2596)
          , N = s(9688);
        function y() {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            return (0,
            N.QP)((0,
            w.$)(t))
        }
        let k = (0,
        j.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , P = g.forwardRef( (e, t) => {
            let {className: s, variant: r, size: l, asChild: i=!1, ...n} = e
              , o = i ? v.DX : "button";
            return (0,
            a.jsx)(o, {
                className: y(k({
                    variant: r,
                    size: l,
                    className: s
                })),
                ref: t,
                ...n
            })
        }
        );
        P.displayName = "Button";
        let A = g.forwardRef( (e, t) => {
            let {className: s, ...r} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: y("rounded-lg border bg-card text-card-foreground shadow-sm", s),
                ...r
            })
        }
        );
        A.displayName = "Card",
        g.forwardRef( (e, t) => {
            let {className: s, ...r} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: y("flex flex-col space-y-1.5 p-6", s),
                ...r
            })
        }
        ).displayName = "CardHeader",
        g.forwardRef( (e, t) => {
            let {className: s, ...r} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: y("text-2xl font-semibold leading-none tracking-tight", s),
                ...r
            })
        }
        ).displayName = "CardTitle",
        g.forwardRef( (e, t) => {
            let {className: s, ...r} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: y("text-sm text-muted-foreground", s),
                ...r
            })
        }
        ).displayName = "CardDescription";
        let q = g.forwardRef( (e, t) => {
            let {className: s, ...r} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: y("p-6 pt-0", s),
                ...r
            })
        }
        );
        function z(e) {
            let {icon: t, title: s, description: r, index: l} = e
              , [i,n] = (0,
            g.useState)(!1)
              , [o,d] = (0,
            g.useState)("")
              , c = (0,
            g.useRef)(null)
              , m = (0,
            g.useRef)()
              , x = (0,
            g.useCallback)(e => {
                c.current && (m.current && cancelAnimationFrame(m.current),
                m.current = requestAnimationFrame( () => {
                    if (!c.current)
                        return;
                    let t = c.current.getBoundingClientRect()
                      , s = e.clientX - t.left
                      , a = e.clientY - t.top
                      , r = t.width / 2
                      , l = t.height / 2;
                    d("perspective(1000px) rotateX(".concat((a - l) / 50, "deg) rotateY(").concat((r - s) / 50, "deg) translateZ(5px) scale(1.01)"))
                }
                ))
            }
            , [])
              , u = (0,
            g.useCallback)( () => {
                n(!0)
            }
            , [])
              , h = (0,
            g.useCallback)( () => {
                n(!1),
                m.current && cancelAnimationFrame(m.current),
                d("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)")
            }
            , []);
            return (0,
            a.jsxs)(A, {
                ref: c,
                className: "feature-card bg-slate-800/30 border-slate-700/50 backdrop-blur-sm cursor-pointer overflow-hidden relative transition-all duration-300 ease-out min-h-[200px] h-full",
                style: {
                    transform: o,
                    transformStyle: "preserve-3d"
                },
                onMouseMove: x,
                onMouseEnter: u,
                onMouseLeave: h,
                children: [(0,
                a.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 transition-opacity duration-300 pointer-events-none ".concat(i ? "opacity-100" : "opacity-0")
                }), (0,
                a.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 pointer-events-none ".concat(i ? "translate-x-full" : "-translate-x-full")
                }), (0,
                a.jsxs)(q, {
                    className: "feature-card-content p-6 text-center relative z-10 h-full flex flex-col justify-center",
                    children: [(0,
                    a.jsx)("div", {
                        className: "mb-4 flex justify-center",
                        children: (0,
                        a.jsx)("div", {
                            className: "p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl transition-all duration-300",
                            style: {
                                transform: i ? "scale(1.05)" : "scale(1)"
                            },
                            children: (0,
                            a.jsx)(t, {
                                className: "h-8 w-8 text-blue-400"
                            })
                        })
                    }), (0,
                    a.jsx)("h3", {
                        className: "text-lg font-semibold mb-3 text-white transition-all duration-300 leading-tight",
                        children: s
                    }), (0,
                    a.jsx)("p", {
                        className: "text-sm text-slate-400 leading-relaxed transition-all duration-300 flex-grow",
                        children: r
                    })]
                })]
            })
        }
        function E() {
            let[e,t] = (0,
            g.useState)(null)
              , [s,v] = (0,
            g.useState)(!1)
              , j = [{
                icon: r.A,
                title: "Level 8 Execution",
                description: "Execute the most advanced scripts with our powerful Level 8 execution engine, handling complex operations seamlessly."
            }, {
                icon: l.A,
                title: "Attractive Interface",
                description: "Beautiful, intuitive design that makes scripting enjoyable with a clean and modern user interface."
            }, {
                icon: i.A,
                title: "Keyless",
                description: "No keys required! Start using Plutora immediately without any authentication hassles or waiting periods."
            }, {
                icon: n.A,
                title: "Internal",
                description: "Built with internal architecture for enhanced performance and reliability in script execution."
            }, {
                icon: o.A,
                title: "Nice Scripting Experience",
                description: "Smooth, responsive scripting environment with syntax highlighting and intelligent code completion."
            }, {
                icon: d.A,
                title: "Lightweight",
                description: "Minimal resource usage while maintaining maximum performance - won't slow down your system."
            }, {
                icon: c.A,
                title: "Semi-Undetected Injection",
                description: "Advanced injection methods designed to minimize detection while maintaining full functionality."
            }, {
                icon: n.A,
                title: "Stable",
                description: "Rock-solid performance with minimal crashes and consistent execution across all Roblox games and updates."
            }]
              , w = [{
                name: "Plutora",
                isOurs: !0,
                features: {
                    keyless: !0,
                    free: !0,
                    highUnc: !0,
                    stable: !0,
                    undetected: !0
                }
            }, {
                name: "Wave",
                isOurs: !1,
                features: {
                    keyless: !1,
                    free: !1,
                    highUnc: !0,
                    stable: !1,
                    undetected: !1
                }
            }, {
                name: "Xeno",
                isOurs: !1,
                features: {
                    keyless: !0,
                    free: !0,
                    highUnc: !1,
                    stable: !1,
                    undetected: !1
                }
            }, {
                name: "Solara",
                isOurs: !1,
                features: {
                    keyless: !0,
                    free: !0,
                    highUnc: !1,
                    stable: !1,
                    undetected: !1
                }
            }];
            (0,
            g.useEffect)( () => {
                let e = e => {
                    let t = e.target;
                    if (t.hash && t.hash.startsWith("#")) {
                        e.preventDefault();
                        let s = t.hash.substring(1)
                          , a = document.getElementById(s);
                        if (a) {
                            let e = a.offsetTop - 100;
                            window.scrollTo({
                                top: e,
                                behavior: "smooth"
                            })
                        }
                        v(!1)
                    }
                }
                  , t = document.querySelectorAll('a[href^="#"], .nav-link');
                t.forEach(t => {
                    t.addEventListener("click", e)
                }
                );
                let a = new IntersectionObserver(e => {
                    e.forEach( (e, t) => {
                        e.isIntersecting && setTimeout( () => {
                            e.target.classList.add("animate-in")
                        }
                        , e.target.classList.contains("pop-in") ? 50 * t : 0)
                    }
                    )
                }
                ,{
                    threshold: .1,
                    rootMargin: "0px 0px -20px 0px"
                })
                  , r = setTimeout( () => {
                    document.querySelectorAll(".scroll-animate, .fade-in, .slide-up, .slide-left, .slide-right, .scale-in, .pop-in").forEach( (e, t) => {
                        e.classList.remove("animate-in"),
                        e.classList.contains("pop-in") && (e.style.transitionDelay = "".concat(t % 8 * 50, "ms")),
                        a.observe(e)
                    }
                    )
                }
                , 100)
                  , l = e => {
                    let t = e.target;
                    s && !t.closest("header") && v(!1)
                }
                ;
                return document.addEventListener("click", l),
                () => {
                    clearTimeout(r),
                    a.disconnect(),
                    document.removeEventListener("click", l),
                    t.forEach(t => {
                        t.removeEventListener("click", e)
                    }
                    )
                }
            }
            , [s]);
            let N = s => {
                t(e === s ? null : s)
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "min-h-screen bg-slate-950 text-white overflow-hidden",
                children: [(0,
                a.jsxs)("div", {
                    className: "fixed inset-0 opacity-30",
                    children: [(0,
                    a.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"
                    }), (0,
                    a.jsxs)("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        children: [(0,
                        a.jsx)("div", {
                            className: "aurora-1"
                        }), (0,
                        a.jsx)("div", {
                            className: "aurora-2"
                        }), (0,
                        a.jsx)("div", {
                            className: "aurora-3"
                        }), (0,
                        a.jsx)("div", {
                            className: "aurora-4"
                        }), (0,
                        a.jsx)("div", {
                            className: "aurora-5"
                        })]
                    })]
                }), (0,
                a.jsxs)("header", {
                    className: "fixed top-0 left-0 right-0 z-50 p-4",
                    children: [(0,
                    a.jsx)("nav", {
                        className: "max-w-7xl mx-auto",
                        children: (0,
                        a.jsx)("div", {
                            className: "bg-slate-900/20 backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl",
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center space-x-2 sm:space-x-3 flex-shrink-0 pop-in",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden plutora-icon pop-in stagger-1",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "absolute inset-0 opacity-60",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "icon-aurora-1"
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "icon-aurora-2"
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "icon-aurora-3"
                                            })]
                                        }), (0,
                                        a.jsx)("span", {
                                            className: "text-white font-bold text-sm sm:text-lg relative z-10",
                                            children: "P"
                                        })]
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pop-in stagger-2",
                                        children: "Plutora"
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "hidden sm:block px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 pop-in stagger-3",
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "text-xs font-medium text-blue-300",
                                            children: "v2.0"
                                        })
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "hidden lg:flex items-center justify-center flex-1 mx-8",
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "flex items-center space-x-1",
                                        children: [(0,
                                        a.jsxs)("a", {
                                            href: "#features",
                                            className: "nav-link px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative overflow-hidden group",
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "relative z-10",
                                                children: "Features"
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            })]
                                        }), (0,
                                        a.jsxs)("a", {
                                            href: "#comparison",
                                            className: "nav-link px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative overflow-hidden group",
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "relative z-10",
                                                children: "Compare"
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            })]
                                        }), (0,
                                        a.jsxs)("a", {
                                            href: "#faq",
                                            className: "nav-link px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative overflow-hidden group",
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "relative z-10",
                                                children: "FAQ"
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            })]
                                        })]
                                    })
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex items-center space-x-2 sm:space-x-3 flex-shrink-0",
                                    children: [(0,
                                    a.jsxs)("a", {
                                        href: "https://plutora.xyz/discord",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hidden sm:flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium discord-btn",
                                        children: [(0,
                                        a.jsx)(m.A, {
                                            className: "mr-1 sm:mr-2 h-4 w-4"
                                        }), (0,
                                        a.jsx)("span", {
                                            className: "hidden md:inline",
                                            children: "Discord"
                                        })]
                                    }), (0,
                                    a.jsxs)("a", {
                                        href: "https://wearedevs.net/d/Plutora",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 sm:px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 download-btn text-sm flex items-center",
                                        children: [(0,
                                        a.jsx)(x.A, {
                                            className: "mr-1 sm:mr-2 h-4 w-4"
                                        }), (0,
                                        a.jsx)("span", {
                                            className: "hidden xs:inline sm:hidden md:inline",
                                            children: "Download"
                                        }), (0,
                                        a.jsx)("span", {
                                            className: "xs:hidden sm:inline md:hidden",
                                            children: "Get"
                                        })]
                                    }), (0,
                                    a.jsx)("button", {
                                        onClick: () => {
                                            v(!s)
                                        }
                                        ,
                                        className: "lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300 touch-manipulation",
                                        "aria-label": "Toggle mobile menu",
                                        children: (0,
                                        a.jsxs)("div", {
                                            className: "w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center space-y-1",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "w-3 sm:w-4 h-0.5 bg-white rounded-full transition-all duration-300 ".concat(s ? "rotate-45 translate-y-1.5" : "")
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "w-3 sm:w-4 h-0.5 bg-white rounded-full transition-all duration-300 ".concat(s ? "opacity-0" : "")
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "w-3 sm:w-4 h-0.5 bg-white rounded-full transition-all duration-300 ".concat(s ? "-rotate-45 -translate-y-1.5" : "")
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "lg:hidden absolute top-full left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ".concat(s ? "opacity-100 visible transform translate-y-0" : "opacity-0 invisible transform -translate-y-4"),
                        children: (0,
                        a.jsxs)("div", {
                            className: "p-4 space-y-3",
                            children: [(0,
                            a.jsx)("a", {
                                href: "#features",
                                className: "block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 touch-manipulation",
                                children: "Features"
                            }), (0,
                            a.jsx)("a", {
                                href: "#comparison",
                                className: "block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 touch-manipulation",
                                children: "Compare"
                            }), (0,
                            a.jsx)("a", {
                                href: "#faq",
                                className: "block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 touch-manipulation",
                                children: "FAQ"
                            }), (0,
                            a.jsx)("div", {
                                className: "border-t border-slate-700/50 pt-3",
                                children: (0,
                                a.jsxs)("a", {
                                    href: "https://plutora.xyz/discord",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl shadow-lg transition-all duration-300 discord-btn touch-manipulation",
                                    children: [(0,
                                    a.jsx)(m.A, {
                                        className: "mr-2 h-4 w-4"
                                    }), "Join Discord"]
                                })
                            })]
                        })
                    })]
                }), (0,
                a.jsx)("section", {
                    className: "relative z-10 pt-32 pb-20 px-6",
                    children: (0,
                    a.jsx)("div", {
                        className: "max-w-7xl mx-auto",
                        children: (0,
                        a.jsxs)("div", {
                            className: "grid lg:grid-cols-2 gap-12 items-center",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "relative slide-right",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "bg-slate-900/80 rounded-lg overflow-hidden",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "flex items-center justify-between px-4 py-3 bg-slate-800/60 border-b border-slate-700/50",
                                            children: [(0,
                                            a.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0,
                                                a.jsx)("div", {
                                                    className: "w-3 h-3 bg-red-500 rounded-full"
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "w-3 h-3 bg-yellow-500 rounded-full"
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "w-3 h-3 bg-green-500 rounded-full"
                                                })]
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-sm text-slate-400 font-medium",
                                                children: "Plutora Script Editor"
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "w-16"
                                            })]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "flex bg-slate-800/40 border-b border-slate-700/50",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "flex items-center px-4 py-2 bg-slate-700/50 border-r border-slate-600/50 text-blue-400 text-sm font-medium",
                                                children: (0,
                                                a.jsx)("span", {
                                                    children: "script.lua"
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "flex items-center px-4 py-2 border-r border-slate-600/30 text-slate-500 text-sm hover:text-slate-300 cursor-pointer",
                                                children: (0,
                                                a.jsx)("span", {
                                                    children: "autoexec.lua"
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "flex items-center px-4 py-2 border-r border-slate-600/30 text-slate-500 text-sm hover:text-slate-300 cursor-pointer",
                                                children: (0,
                                                a.jsx)("span", {
                                                    children: "config.lua"
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "flex-1"
                                            })]
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "p-4 bg-slate-900/60",
                                            children: (0,
                                            a.jsxs)("div", {
                                                className: "space-y-2 font-mono text-sm",
                                                children: [(0,
                                                a.jsx)("div", {
                                                    className: "text-slate-500",
                                                    children: "-- Plutora Script Example"
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "text-purple-400",
                                                    children: "local player = game.Players.LocalPlayer"
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "text-purple-400",
                                                    children: "local character = player.Character"
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "text-white"
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "text-slate-500",
                                                    children: "-- Speed and Jump modifications"
                                                }), (0,
                                                a.jsxs)("div", {
                                                    className: "text-white",
                                                    children: ["character.Humanoid.WalkSpeed = ", (0,
                                                    a.jsx)("span", {
                                                        className: "text-orange-400",
                                                        children: "50"
                                                    })]
                                                }), (0,
                                                a.jsxs)("div", {
                                                    className: "text-white",
                                                    children: ["character.Humanoid.JumpPower = ", (0,
                                                    a.jsx)("span", {
                                                        className: "text-orange-400",
                                                        children: "100"
                                                    })]
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "text-white"
                                                }), (0,
                                                a.jsxs)("div", {
                                                    className: "text-blue-400",
                                                    children: ["print", (0,
                                                    a.jsx)("span", {
                                                        className: "text-white",
                                                        children: "("
                                                    }), (0,
                                                    a.jsx)("span", {
                                                        className: "text-green-400",
                                                        children: '"Script executed successfully!"'
                                                    }), (0,
                                                    a.jsx)("span", {
                                                        className: "text-white",
                                                        children: ")"
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "flex gap-3 mt-4",
                                        children: [(0,
                                        a.jsxs)(P, {
                                            size: "sm",
                                            className: "bg-blue-600 hover:bg-blue-700 flex-1",
                                            children: [(0,
                                            a.jsx)(r.A, {
                                                className: "mr-2 h-4 w-4"
                                            }), "Execute"]
                                        }), (0,
                                        a.jsx)(P, {
                                            size: "sm",
                                            variant: "outline",
                                            className: "border-slate-600 text-slate-300 hover:bg-slate-700",
                                            children: "Clear"
                                        }), (0,
                                        a.jsx)(P, {
                                            size: "sm",
                                            variant: "outline",
                                            className: "border-slate-600 text-slate-300 hover:bg-slate-700",
                                            children: "Save"
                                        })]
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "space-y-8 slide-left",
                                children: [(0,
                                a.jsxs)("div", {
                                    children: [(0,
                                    a.jsx)("h1", {
                                        className: "text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animated-header",
                                        children: "Plutora v2"
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-lg sm:text-xl text-slate-300 leading-relaxed mb-6",
                                        children: "The most advanced Roblox executor with Level 8 execution capabilities. Experience unparalleled performance, stability, and an intuitive interface designed for both beginners and advanced users."
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "flex flex-wrap gap-4 sm:gap-6 mb-8",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "flex items-center space-x-2 px-3 sm:px-4 py-2 bg-slate-800/30 rounded-xl border border-slate-700/50 pop-in stagger-1",
                                            children: [(0,
                                            a.jsx)(u.A, {
                                                className: "h-4 sm:h-5 w-4 sm:w-5 text-blue-400"
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-white font-semibold text-sm sm:text-base",
                                                children: "10,000+"
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-slate-400 text-sm sm:text-base",
                                                children: "Downloads"
                                            })]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "flex items-center space-x-2 px-3 sm:px-4 py-2 bg-slate-800/30 rounded-xl border border-slate-700/50 pop-in stagger-2",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-white font-semibold text-sm sm:text-base",
                                                children: "100%"
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-slate-400 text-sm sm:text-base",
                                                children: "Working"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "space-y-4 fade-in stagger-3",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-4 fade-in stagger-3",
                                        children: [(0,
                                        a.jsxs)("a", {
                                            href: "https://wearedevs.net/d/Plutora",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 download-btn flex items-center justify-center touch-manipulation",
                                            children: [(0,
                                            a.jsx)(x.A, {
                                                className: "mr-2 h-4 sm:h-5 w-4 sm:w-5"
                                            }), "Download for Windows"]
                                        }), (0,
                                        a.jsxs)("a", {
                                            href: "https://plutora.xyz/discord",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "border-2 border-purple-500/50 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white hover:border-purple-400 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center discord-btn touch-manipulation",
                                            children: [(0,
                                            a.jsx)(m.A, {
                                                className: "mr-2 h-4 sm:h-5 w-4 sm:w-5"
                                            }), "Join Discord"]
                                        })]
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-sm text-slate-400 text-center sm:text-left",
                                        children: "Free • No Key Required • Instant Access"
                                    })]
                                })]
                            })]
                        })
                    })
                }), (0,
                a.jsx)("section", {
                    id: "features",
                    className: "relative z-10 py-20 px-6",
                    children: (0,
                    a.jsxs)("div", {
                        className: "max-w-7xl mx-auto",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-center mb-16 slide-up",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animated-header",
                                children: "Powerful Features"
                            }), (0,
                            a.jsx)("p", {
                                className: "text-lg sm:text-xl text-slate-300",
                                children: "Everything you need for the perfect scripting experience"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6",
                            children: j.map( (e, t) => (0,
                            a.jsx)("div", {
                                className: "pop-in stagger-".concat(Math.min(t + 1, 8)),
                                children: (0,
                                a.jsx)(z, {
                                    icon: e.icon,
                                    title: e.title,
                                    description: e.description,
                                    index: t
                                })
                            }, t))
                        })]
                    })
                }), (0,
                a.jsx)("section", {
                    id: "comparison",
                    className: "relative z-10 py-20 px-6",
                    children: (0,
                    a.jsxs)("div", {
                        className: "max-w-6xl mx-auto",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-center mb-16 slide-up",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animated-header",
                                children: "Comparisons"
                            }), (0,
                            a.jsx)("p", {
                                className: "text-lg sm:text-xl text-slate-300",
                                children: "See how Plutora stands above the competition"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden scale-in",
                            children: (0,
                            a.jsx)("div", {
                                className: "overflow-x-auto",
                                children: (0,
                                a.jsxs)("table", {
                                    className: "w-full min-w-[600px]",
                                    children: [(0,
                                    a.jsx)("thead", {
                                        children: (0,
                                        a.jsxs)("tr", {
                                            className: "border-b border-slate-700/50",
                                            children: [(0,
                                            a.jsx)("th", {
                                                className: "text-left p-4 sm:p-6 text-slate-300 font-medium",
                                                children: "Features"
                                            }), w.map(e => (0,
                                            a.jsx)("th", {
                                                className: "text-center p-4 sm:p-6",
                                                children: (0,
                                                a.jsx)("div", {
                                                    className: "inline-block px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base ".concat(e.isOurs ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : "bg-slate-700/50 text-slate-300"),
                                                    children: e.name
                                                })
                                            }, e.name))]
                                        })
                                    }), (0,
                                    a.jsx)("tbody", {
                                        children: [{
                                            key: "keyless",
                                            label: "Keyless"
                                        }, {
                                            key: "free",
                                            label: "Free"
                                        }, {
                                            key: "highUnc",
                                            label: "High Unc"
                                        }, {
                                            key: "stable",
                                            label: "Stable"
                                        }, {
                                            key: "undetected",
                                            label: "Undetected"
                                        }].map( (e, t) => (0,
                                        a.jsxs)("tr", {
                                            className: "border-b border-slate-700/30 ".concat(t % 2 == 0 ? "bg-slate-800/20" : "", " fade-in stagger-").concat(t + 1),
                                            children: [(0,
                                            a.jsx)("td", {
                                                className: "p-4 sm:p-6 font-medium text-white text-sm sm:text-base",
                                                children: e.label
                                            }), w.map(t => (0,
                                            a.jsx)("td", {
                                                className: "text-center p-4 sm:p-6",
                                                children: t.features[e.key] ? (0,
                                                a.jsx)(h.A, {
                                                    className: "h-5 sm:h-6 w-5 sm:w-6 text-green-400 mx-auto"
                                                }) : (0,
                                                a.jsx)(p.A, {
                                                    className: "h-5 sm:h-6 w-5 sm:w-6 text-red-400 mx-auto"
                                                })
                                            }, t.name))]
                                        }, e.key))
                                    })]
                                })
                            })
                        })]
                    })
                }), (0,
                a.jsx)("section", {
                    id: "faq",
                    className: "relative z-10 py-20 px-6",
                    children: (0,
                    a.jsxs)("div", {
                        className: "max-w-4xl mx-auto",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-center mb-16 slide-up",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animated-header",
                                children: "Frequently Asked Questions"
                            }), (0,
                            a.jsx)("p", {
                                className: "text-lg sm:text-xl text-slate-300",
                                children: "Get answers to common questions about Plutora"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "space-y-4",
                            children: [{
                                question: "Is Plutora completely free to use?",
                                answer: "Yes! Plutora is 100% free with no hidden costs, premium tiers, or subscription fees. You get full access to all Level 8 execution features without any limitations."
                            }, {
                                question: "Do I need a key or whitelist to use Plutora?",
                                answer: "No keys required! Plutora is completely keyless, meaning you can download and start using it immediately without any authentication process or waiting periods."
                            }, {
                                question: "Is Plutora safe and undetected?",
                                answer: "Plutora uses advanced semi-undetected injection methods and internal architecture to minimize detection risks. However, as with any executor, use at your own discretion and follow Roblox's terms of service."
                            }, {
                                question: "What execution level does Plutora support?",
                                answer: "Plutora supports Level 8 execution, which means it can run the most advanced and complex scripts available, including those that require high-level game access and manipulation."
                            }, {
                                question: "Will Plutora slow down my computer?",
                                answer: "No! Plutora is designed to be lightweight with minimal resource usage. It won't impact your system performance and runs efficiently in the background."
                            }, {
                                question: "How often is Plutora updated?",
                                answer: "Plutora receives regular updates to maintain compatibility with Roblox updates, improve stability, and add new features. Updates are automatic and seamless."
                            }, {
                                question: "Can I use Plutora on any Roblox game?",
                                answer: "Yes! Plutora works across all Roblox games thanks to its Level 8 execution capabilities and stable internal architecture. Some games may have additional protections, but Plutora handles most scenarios effectively."
                            }, {
                                question: "What if I encounter issues or need support?",
                                answer: "Our community provides excellent support through Discord and forums. Most common issues are resolved quickly, and our stable architecture minimizes problems."
                            }].map( (t, s) => (0,
                            a.jsxs)("div", {
                                className: "bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden faq-item pop-in stagger-".concat(Math.min(s + 1, 8)),
                                children: [(0,
                                a.jsxs)("button", {
                                    onClick: () => N(s),
                                    className: "w-full px-4 sm:px-6 py-4 text-left faq-question flex items-center justify-between hover:bg-slate-700/20 transition-all duration-300 touch-manipulation",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [(0,
                                        a.jsx)(b.A, {
                                            className: "h-4 sm:h-5 w-4 sm:w-5 text-blue-400 flex-shrink-0"
                                        }), (0,
                                        a.jsx)("span", {
                                            className: "text-white font-medium text-sm sm:text-base",
                                            children: t.question
                                        })]
                                    }), (0,
                                    a.jsx)(f.A, {
                                        className: "h-4 sm:h-5 w-4 sm:w-5 text-slate-400 faq-icon ".concat(e === s ? "open" : "")
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "px-4 sm:px-6 bg-slate-900/20 faq-answer ".concat(e === s ? "open" : ""),
                                    children: (0,
                                    a.jsx)("p", {
                                        className: "text-slate-300 leading-relaxed text-sm sm:text-base",
                                        children: t.answer
                                    })
                                })]
                            }, s))
                        })]
                    })
                }), (0,
                a.jsx)("footer", {
                    id: "download",
                    className: "relative z-10 py-12 px-6 border-t border-slate-800/50 slide-up",
                    children: (0,
                    a.jsxs)("div", {
                        className: "max-w-7xl mx-auto text-center",
                        children: [(0,
                        a.jsx)("div", {
                            className: "text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                            children: "Plutora"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-slate-400 text-sm sm:text-base",
                            children: "\xa9 2025 Plutora. All rights reserved."
                        })]
                    })
                })]
            })
        }
        q.displayName = "CardContent",
        g.forwardRef( (e, t) => {
            let {className: s, ...r} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: y("flex items-center p-6 pt-0", s),
                ...r
            })
        }
        ).displayName = "CardFooter"
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [353, 441, 684, 358], () => t(4176)),
    _N_E = e.O()
}
]);
