(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        114: function(e, t, a) {},
        117: function(e, t, a) {},
        172: function(e, t, a) {},
        174: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = {};
            a.r(n), a.d(n, "getAuth", function() { return _ }), a.d(n, "githubOAuth", function() { return C }), a.d(n, "twitterOAuth", function() { return D }), a.d(n, "facebookOAuth", function() { return N }), a.d(n, "googleOAuth", function() { return A });
            var r = a(0),
                o = a.n(r),
                c = a(13),
                i = a.n(c),
                l = (a(76), a(9)),
                s = a(8),
                u = a(12),
                m = a(10),
                d = a(11),
                h = a(63),
                p = a(64),
                b = a(38),
                f = a(27),
                v = (a(78), function(e) {
                    var t = e.children,
                        a = e.contentCenter;
                    return o.a.createElement("section", null, o.a.createElement("header", null, o.a.createElement("h1", null, "Employer Database View Application")), o.a.createElement("main", { className: a ? "content-center" : "" }, t), o.a.createElement("footer", null))
                });
            v.defaultProps = { contentCenter: !1 };
            var g = v,
                E = a(65),
                y = (a(80), function(e) {
                    e.history;
                    var t = e.buttonList,
                        a = e.auth,
                        n = e.currentProviders,
                        r = function(e) { e ? null === n ? console.log("") : n(e.user.providerData) : console.error("Error authenticating") };
                    return o.a.createElement("div", { className: "btn__social--list" }, Object.keys(t).map(function(e) {
                        var n = t[e].visible;
                        return o.a.createElement("button", {
                            key: e,
                            className: "btn__social btn--".concat(e, " ").concat(!n && "hidden"),
                            onClick: function(n) {
                                return function(e, n) {
                                    var o = t[n].provider();
                                    a().currentUser ? a().currentUser.linkWithPopup(o).then(r).catch(function(e) { return console.error(e) }) : a().signInWithPopup(o).then(r).catch(function(e) { return console.error(e) })
                                }(0, e)
                            }
                        }, e)
                    }))
                });
            y.defaultProps = { currentProviders: null };
            var O = Object(E.a)(y),
                j = a(67),
                w = a.n(j),
                k = (a(91), w.a.initializeApp({ apiKey: "AIzaSyC3m1LnKXudteB2WKCToWZ-0-_cVgp-NNU", authDomain: "edva-cmpe172.firebaseapp.com", databaseURL: "https://edva-cmpe172.firebaseio.com", projectId: "edva-cmpe172", storageBucket: "edva-cmpe172.appspot.com", messagingSenderId: "606646992739" })),
                _ = function() { return k.auth() },
                C = function() { return new k.firebase_.auth.GithubAuthProvider },
                D = function() { return new k.firebase_.auth.TwitterAuthProvider },
                N = function() { return new k.firebase_.auth.FacebookAuthProvider },
                A = function() { return new k.firebase_.auth.GoogleAuthProvider },
                S = a(14),
                P = a(5),
                U = function(e) {
                    function t(e) { var a; return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).toggle = a.toggle.bind(Object(S.a)(Object(S.a)(a))), a.state = { isOpen: !1 }, a }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "toggle", value: function() { this.setState({ isOpen: !this.state.isOpen }) } }, { key: "render", value: function() { return o.a.createElement("div", null, o.a.createElement(P.f, { className: "navbar navbar-expand-sm bg-success navbar-dark" }, o.a.createElement(P.g, { href: "/" }, "EDVA"), o.a.createElement(P.h, { onClick: this.toggle }), o.a.createElement(P.b, { isOpen: this.state.isOpen, navbar: !0 }, o.a.createElement(P.c, { className: "ml-auto", navbar: !0 }, o.a.createElement(P.d, null, o.a.createElement(P.e, { href: "/About/" }, "About")), o.a.createElement(P.d, null, o.a.createElement(P.e, { href: "https://github.com/aaronjohn2/EmployerDatabaseViewApplication.git" }, "Github")))))) } }]), t
                }(r.Component),
                L = (a(31), a(20)),
                x = a.n(L),
                I = window.location.href;
            console.log("Host url is: " + I);
            var M = { google: { visible: !0, provider: function() { return n.googleOAuth() } }, github: { visible: !0, provider: function() { var e = n.githubOAuth(); return e.addScope("user"), e } }, twitter: { visible: !0, provider: function() { return n.twitterOAuth() } }, facebook: { visible: !0, provider: function() { return n.facebookOAuth() } } },
                F = function(e) {
                    function t(e) { var a; return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).state = { createNewUser: !1, uid: "" }, a }
                    return Object(d.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            n.getAuth().onAuthStateChanged(function(t) {
                                t && (e.setState({ uid: t.uid }), console.log("User logged in as: " + t.uid), x.a.get(I + "/user/" + t.uid).then(function(t) {
                                    if (console.log("Res status" + t.status), 200 === t.status) {
                                        console.log(t.data);
                                        var a = t.data[0].company;
                                        console.log("Company is: " + a), null !== a && "" !== a && a.length > 1 ? e.props.history.push("/home") : e.props.history.push("/dashboard")
                                    } else console.log("ELSE")
                                }).catch(function(a) {
                                    e.setState({ createNewUser: !0 }), console.log("User sign in error is: " + a), console.log("Creating user in db");
                                    var n = { uid: t.uid, email: t.email, access_level: "", company: "" };
                                    x.a.post(I + "/user", n).then(function(t) { t.data._id && (console.log("Data to be posted" + t.data), e.props.history.push("/dashboard")) }).catch(function(e) { console.log("Error on user post" + e.toString()) })
                                }).finally(function(e) { console.log("Finally") }))
                            })
                        }
                    }, { key: "render", value: function() { return o.a.createElement("div", null, o.a.createElement(U, null), o.a.createElement(g, { contentCenter: !0 }, o.a.createElement("p", null, "Signin using Google Single Sign-on, link is ", I), o.a.createElement("p", null, "Current link is ", I), o.a.createElement(O, { buttonList: M, auth: n.getAuth }), o.a.createElement(f.a, { to: "/searchtweets" }, " click to view EDVA's user review tweets"))) } }]), t
                }(r.Component),
                T = a(42),
                W = a(22),
                B = a(49),
                V = a.n(B),
                R = a(69),
                G = (a(114), function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (a = Object(u.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(r)))).handleProviderUnlink = function() {
                            var e = Object(R.a)(V.a.mark(function e(t, n) {
                                var r, o, c, i;
                                return V.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = a.props, o = r.auth, c = r.unlinkedProvider, !window.confirm("Do you really want to unlink ".concat(n, "?"))) { e.next = 6; break }
                                            return e.next = 4, o().currentUser.unlink("".concat(n, ".com")).catch(function(e) { return console.error(e) });
                                        case 4:
                                            i = e.sent, c(n, i.providerData);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, a) { return e.apply(this, arguments) }
                        }(), a.renderProfileList = function(e) {
                            var t = e.providerId,
                                n = e.photoURL,
                                r = t.split(".")[0];
                            return o.a.createElement("div", { className: "container__profile", key: r }, o.a.createElement("img", { src: n, alt: r, className: "container__profile--photo" }), o.a.createElement("p", null, r), o.a.createElement("button", { className: "container__profile--btn", onClick: function(e) { return a.handleProviderUnlink(e, r) } }, "Unlink"))
                        }, a
                    }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "render", value: function() { return o.a.createElement(r.Fragment, null, o.a.createElement("p", { className: "text--center" }, o.a.createElement("strong", null, "Connected Social Accounts")), o.a.createElement("div", { className: "btn__profiles--list" }, this.props.providerData.map(this.renderProfileList))) } }]), t
                }(r.PureComponent)),
                z = (a(44), function(e) {
                    function t(e) { var a; return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).state = { companyName: "", companyVacant: !0, user_uid: n.getAuth().currentUser.uid }, console.log(a.state.user_uid), a.handleChange = a.handleChange.bind(Object(S.a)(Object(S.a)(a))), a.submitNewCompany = a.submitNewCompany.bind(Object(S.a)(Object(S.a)(a))), a }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "handleChange", value: function(e) { this.setState({ companyName: e.target.value }) } }, {
                        key: "submitNewCompany",
                        value: function(e) {
                            var t = this;
                            console.log("Company name: " + this.state.companyName);
                            var a = { company: this.state.companyName, access_level: "0" };
                            x.a.put(I + "/user/".concat(this.state.user_uid), a).then(function(e) { 200 === e.status ? (console.log(e.data), alert("".concat(t.state.companyName, " company created successfully"))) : console.log("Company was not created") }).catch(function(e) { console.log("Company creation error: " + e.toString()) }), e.preventDefault()
                        }
                    }, { key: "render", value: function() { return o.a.createElement("form", { onSubmit: this.submitNewCompany }, o.a.createElement("div", { id: "com" }, o.a.createElement("div", { id: "create" }, o.a.createElement("div", { id: "boxborder" }, o.a.createElement("div", null, " ", o.a.createElement("label", null, "Create Company"))), o.a.createElement("div", { id: "boxborder" }, o.a.createElement("label", null, "Company Name:"), o.a.createElement("input", { type: "text", value: this.state.companyName, onChange: this.handleChange })), o.a.createElement("div", { id: "boxborder" }, o.a.createElement("input", { type: "submit", value: "Submit" }))), o.a.createElement("div", { id: "join" }, o.a.createElement("div", { id: "boxborder" }, o.a.createElement("p", null, "Join Company")), o.a.createElement("div", { id: "boxborder" }, o.a.createElement("p", null, "Your UID: "), o.a.createElement("label", null, this.state.user_uid)), o.a.createElement("div", { id: "boxborder" }, o.a.createElement("label", null, "Send your UID to the company manager"))))) } }]), t
                }(r.Component)),
                J = function(e) {
                    function t(e) { var a; return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).toggle = a.toggle.bind(Object(S.a)(Object(S.a)(a))), a.state = { isOpen: !1 }, a }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "toggle", value: function() { this.setState({ isOpen: !this.state.isOpen }) } }, { key: "render", value: function() { return o.a.createElement("div", null, o.a.createElement(P.f, { className: "navbar navbar-expand-sm bg-success navbar-dark" }, o.a.createElement(P.g, { href: "/" }, "EDVA"), o.a.createElement(P.h, { onClick: this.toggle }), o.a.createElement(P.b, { isOpen: this.state.isOpen, navbar: !0 }, o.a.createElement(P.c, { className: "ml-auto", navbar: !0 }, o.a.createElement(P.d, null, o.a.createElement(P.e, { href: "/Dashboard/" }, "Dashboard")), o.a.createElement(P.d, null, o.a.createElement(P.e, { href: "/Home/" }, "Data Table")), o.a.createElement(P.d, null, o.a.createElement(P.e, { href: "https://github.com/aaronjohn2/EmployerDatabaseViewApplication.git" }, "Github")), o.a.createElement(P.d, null, o.a.createElement("button", { className: "btn__logout", onClick: function() { return _().signOut() } }, "Logout")))))) } }]), t
                }(r.Component),
                K = (a(117), function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c];
                        return (a = Object(u.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).state = { buttonList: { github: { visible: !1, provider: function() { var e = n.githubOAuth(); return e.addScope("user"), e } }, twitter: { visible: !1, provider: function() { return n.twitterOAuth() } }, facebook: { visible: !1, provider: function() { return n.facebookOAuth() } } }, providerData: a.props.providerData }, a.handleCurrentProviders = function(e) { a.updateProviders(e) }, a.updateProviders = function(e) {
                            var t = Object(W.a)({}, a.state.buttonList);
                            e.forEach(function(e) {
                                var n = e.providerId.split(".")[0];
                                t = a.updateButtonList(t, n, !1)
                            }), a.setState({ buttonList: t, providerData: e })
                        }, a.handleUnliknedProvider = function(e, t) {
                            t.length < 1 && n.getAuth().currentUser.delete().then(function() { return console.log("User Deleted") }).catch(function() { return console.error("Error deleting user") });
                            var r = Object(W.a)({}, a.state.buttonList);
                            r = a.updateButtonList(r, e, !0), a.setState({ buttonList: r, providerData: t })
                        }, a.updateButtonList = function(e, t, a) { return Object(W.a)({}, e, Object(T.a)({}, t, Object(W.a)({}, e[t], { visible: a }))) }, a
                    }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function() { this.updateProviders(this.state.providerData) } }, { key: "render", value: function() { return o.a.createElement("div", null, o.a.createElement(J, null), o.a.createElement(g, null, o.a.createElement(G, { auth: n.getAuth, providerData: this.state.providerData, unlinkedProvider: this.handleUnliknedProvider }), o.a.createElement(z, null))) } }]), t
                }(r.Component));
            K.defaultProps = { providerData: [] };
            var H = K,
                Y = function() { return o.a.createElement("div", null, o.a.createElement(U, null), o.a.createElement(g, null, o.a.createElement("h2", null, "About"), o.a.createElement("p", null, "Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger, salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round alcatra."))) },
                Q = a(50),
                X = a(6),
                Z = a(29),
                $ = function(e) { return e.id },
                q = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).getUserInfo = function() { x.a.get(I + "/user/".concat(a.state.uid)).then(function(e) { 200 === e.status && (a.setState({ user_company: e.data[0].company }), a.setState({ user_access: "" + e.data[0].access_level })) }).finally(function() { a.loadData() }) }, a.checkData = function(e) {
                            Object.keys(e).forEach(function(t) { e[t] = e[t].trim() });
                            var t = e.first_name,
                                a = e.last_name,
                                n = e.email,
                                r = e.salary,
                                o = e.manager_id,
                                c = e.position,
                                i = e.access_level,
                                l = e.company;
                            return t && "" !== t ? a && "" !== a ? n && "" !== n ? r && "" !== r ? o && "" !== o ? c && "" !== c ? l && "" !== l ? i && "" !== i ? isNaN(parseFloat(r)) || !isFinite(r) ? (alert("salary can only contain numbers"), !1) : (e.salary = parseInt(r), !0) : (alert("Access level cannot be empty"), !1) : (alert("Company name cannot be left blank"), !1) : (alert("Position cannot be left blank"), !1) : (alert("Manager id cannot be left blank"), !1) : (alert("Salary cannot be left blank"), !1) : (alert("Email cannot be left blank"), !1) : (alert("Last Name cannot be left blank"), !1) : (alert("First Name cannot be left blank"), !1)
                        }, a.loadData = function() {
                            console.log("Company " + a.state.user_company), x.a.get(I + "/getdata", { params: { uid: a.state.uid, company: a.state.user_company, access_level: a.state.user_access } }).then(function(e) {
                                if (200 === e.status) {
                                    var t = e.data,
                                        n = [];
                                    t.forEach(function(e, t) {
                                        var a = e.first_name,
                                            r = e.last_name,
                                            o = e.email,
                                            c = e.salary,
                                            i = e.manager_id,
                                            l = e.position,
                                            s = e.access_level,
                                            u = e.company,
                                            m = e._id;
                                        n.push({ _id: m, first_name: a, last_name: r, email: o, salary: c, manager_id: i, position: l, access_level: s, company: u, id: t })
                                    }), a.setState({ rows: n })
                                } else alert("unable to fetch data, try again")
                            }).catch(function(e) { console.log(e.toString()) })
                        }, a.state = { uid: n.getAuth().currentUser.uid, user_company: "", user_access: "", columns: [{ name: "first_name", title: "First Name" }, { name: "last_name", title: "Last Name" }, { name: "email", title: "Email" }, { name: "salary", title: "Salary" }, { name: "manager_id", title: "Manager ID" }, { name: "position", title: "Position" }, { name: "access_level", title: "Access level" }, { name: "company", title: "Company" }], rows: [] }, a.getUserInfo(), a.commitChanges = a.commitChanges.bind(Object(S.a)(Object(S.a)(a))), a
                    }
                    return Object(d.a)(t, e), Object(s.a)(t, [{
                        key: "commitChanges",
                        value: function(e) {
                            var t = this,
                                a = e.added,
                                n = e.changed,
                                r = e.deleted,
                                o = this.state.rows;
                            if (a) {
                                var c = a[0];
                                c.access_level = this.state.user_access, c.manager_id = this.state.uid, c.company = this.state.user_company, this.checkData(c) && x.a.post(I + "/data", c).then(function(e) {
                                    if (e.data._id) {
                                        console.log(e);
                                        var n = o.length > 0 ? o[o.length - 1].id + 1 : 0;
                                        o = Object(Q.a)(o).concat(Object(Q.a)(a.map(function(e, t) { return Object(W.a)({ id: n + t }, e) }))), console.log(o), t.setState({ rows: o })
                                    } else alert("unable to add. please check the data you entered")
                                }).catch(function(e) { return console.log(e) })
                            }
                            n && o.map(function(e) {
                                if (n[e.id]) {
                                    var a = Object(W.a)({}, e, n[e.id]);
                                    if (delete a.id, a.salary = "".concat(a.salary), t.checkData(a)) {
                                        var r = a._id;
                                        delete a._id, x.a.put(I + "/data/".concat(r), a).then(function(e) { 200 === e.status && (o = o.map(function(e) { return n[e.id] ? Object(W.a)({}, e, n[e.id]) : e }), t.setState({ rows: o })) })
                                    }
                                }
                            }), r && o.map(function(e) {
                                r[0] === e.id && x.a.delete(I + "/data/".concat(e._id)).then(function(e) {
                                    if (200 === e.status) {
                                        var a = new Set(r);
                                        o = o.filter(function(e) { return !a.has(e.id) }), t.setState({ rows: o })
                                    }
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.rows,
                                a = e.columns;
                            return r.createElement(P.a, null, r.createElement(Z.a, { rows: t, columns: a, getRowId: $ }, r.createElement(X.c, { onCommitChanges: this.commitChanges }), r.createElement(Z.b, null), r.createElement(Z.e, null), r.createElement(Z.d, null), r.createElement(Z.c, { showAddCommand: !0, showEditCommand: !0, showDeleteCommand: !0 })))
                        }
                    }]), t
                }(r.PureComponent),
                ee = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).getCurUser = function(e) {
                            x.a.get(I + "/user/" + a.state.cur_uuid).then(function(e) {
                                if (200 === e.status) {
                                    var t = e.data;
                                    a.setState({ cur_user_company: t[0].company, new_user_access: (parseInt(t[0].access_level) + 1).toString() })
                                }
                            }).finally(function() { a.addNewManager() }), e.preventDefault()
                        }, a.addNewManager = function() {
                            var e = { company: a.state.cur_user_company, access_level: a.state.new_user_access };
                            console.log("New user uid: " + a.state.new_user), x.a.put(I + "/user/".concat(a.state.new_user), e).then(function(e) { 200 === e.status && (alert("Manager added successfully!"), console.log(e.data)) })
                        }, a.state = { cur_uuid: n.getAuth().currentUser.uid, cur_user_company: "", new_user_access: "", new_user: "" }, a.handleChange = a.handleChange.bind(Object(S.a)(Object(S.a)(a))), a.getCurUser = a.getCurUser.bind(Object(S.a)(Object(S.a)(a))), a
                    }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function() {} }, { key: "handleChange", value: function(e) { this.setState({ new_user: e.target.value }) } }, { key: "render", value: function() { return o.a.createElement("form", { onSubmit: this.getCurUser }, o.a.createElement("div", { id: "addmanager" }, o.a.createElement("label", null, "Add Manager :"), o.a.createElement("input", { type: "text", value: this.state.companyName, onChange: this.handleChange, size: "50" }), o.a.createElement("input", { type: "submit", value: "Submit" }))) } }]), t
                }(r.Component),
                te = function(e) {
                    function t(e) { var a; return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).state = { value: "" }, a.handleChange = a.handleChange.bind(Object(S.a)(Object(S.a)(a))), a.handleSubmit = a.handleSubmit.bind(Object(S.a)(Object(S.a)(a))), a }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "handleChange", value: function(e) { this.setState({ companyName: e.target.companyName }) } }, { key: "handleSubmit", value: function(e) { alert("A name was submitted: " + this.state.companyName), e.preventDefault() } }, { key: "render", value: function() { return o.a.createElement("div", null, o.a.createElement(J, null), o.a.createElement("div", null, o.a.createElement(ee, null)), o.a.createElement("div", null, o.a.createElement(q, null))) } }]), t
                }(r.Component),
                ae = function(e) {
                    function t(e) { var a; return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).state = { tweets: [] }, a }
                    return Object(d.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            x.a.get(I + "/data/twitter").then(function(t) {
                                if (200 === t.status) {
                                    var a = t.data.statuses;
                                    e.setState({ tweets: a })
                                } else alert("unable to fetch data, try again")
                            })
                        }
                    }]), Object(s.a)(t, [{ key: "render", value: function() { var e = this.state.tweets.map(function(e) { return o.a.createElement("div", null, e.text, o.a.createElement("br", null)) }); return o.a.createElement("div", null, o.a.createElement(U, null), o.a.createElement("h2", null, "Tweets:"), o.a.createElement("div", null, o.a.createElement("ul", null, o.a.createElement("div", null, " ", o.a.createElement("li", null, e))))) } }]), t
                }(r.Component),
                ne = a(70),
                re = a.n(ne),
                oe = function(e) {
                    return function(t) {
                        function a() {
                            var e, t;
                            Object(l.a)(this, a);
                            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            return (t = Object(u.a)(this, (e = Object(m.a)(a)).call.apply(e, [this].concat(r)))).state = { providerData: [] }, t
                        }
                        return Object(d.a)(a, t), Object(s.a)(a, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this;
                                n.getAuth().onAuthStateChanged(function(t) { t ? e.setState({ providerData: t.providerData }) : (console.info("Must be authenticated"), e.props.history.push("/")) })
                            }
                        }, { key: "render", value: function() { return this.state.providerData.length > 0 ? o.a.createElement(e, Object.assign({}, this.props, { providerData: this.state.providerData })) : o.a.createElement(re.a, { wait: 250 }, o.a.createElement("p", null, "Loading...")) } }]), a
                    }(r.Component)
                },
                ce = a(23),
                ie = function(e) {
                    function t() { return Object(l.a)(this, t), Object(u.a)(this, Object(m.a)(t).apply(this, arguments)) }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "render", value: function() { return o.a.createElement(ce.Footer, { color: "green", className: "font-small pt-4 mt-4" }, o.a.createElement(ce.Container, { fluid: !0, className: "text-center text-md-left" }, o.a.createElement(ce.Row, null, o.a.createElement(ce.Col, { md: "6" }, o.a.createElement("h5", { className: "title" }, "CMPE 172 Final Project"), o.a.createElement("p", null)), o.a.createElement(ce.Col, { md: "6" }, o.a.createElement("h5", null, " Team Members: "), o.a.createElement("ul", null, o.a.createElement("li", { className: "list-unstyled" }, o.a.createElement("h5", null, " Nikita, Raghav, Sam, Aaron, Tahsin")))))), o.a.createElement("div", { className: "footer-copyright text-center py-3" }, o.a.createElement(ce.Container, { fluid: !0 }, "\xa9 ", (new Date).getFullYear(), " Copyright:", " ", o.a.createElement("p", null, " CMPE 172 Spartan Developer ")))) } }]), t
                }(r.Component),
                le = (a(170), a(172), function(e) {
                    function t(e) { var a; return Object(l.a)(this, t), (a = Object(u.a)(this, Object(m.a)(t).call(this, e))).state = { cur_user_uid: "" }, a }
                    return Object(d.a)(t, e), Object(s.a)(t, [{ key: "render", value: function() { return o.a.createElement("div", null, o.a.createElement(h.a, null, o.a.createElement(p.a, null, o.a.createElement(b.a, { path: "/", exact: !0, component: F }), o.a.createElement(b.a, { path: "/dashboard", component: oe(H) }), o.a.createElement(b.a, { path: "/about", component: Y }), o.a.createElement(b.a, { path: "/home", component: oe(te) }), o.a.createElement(b.a, { path: "/searchtweets", component: ae }))), o.a.createElement(ie, null)) } }]), t
                }(r.Component)),
                se = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function ue(e) {
                navigator.serviceWorker.register(e).then(function(e) {
                    e.onupdatefound = function() {
                        var t = e.installing;
                        t.onstatechange = function() { "installed" === t.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use.")) }
                    }
                }).catch(function(e) { console.error("Error during service worker registration:", e) })
            }
            i.a.render(o.a.createElement(le, null), document.getElementById("root")),
                function() {
                    if ("serviceWorker" in navigator) {
                        if (new URL(".", window.location).origin !== window.location.origin) return;
                        window.addEventListener("load", function() {
                            var e = "".concat(".", "/service-worker.js");
                            se ? (function(e) { fetch(e).then(function(t) { 404 === t.status || -1 === t.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then(function(e) { e.unregister().then(function() { window.location.reload() }) }) : ue(e) }).catch(function() { console.log("No internet connection found. App is running in offline mode.") }) }(e), navigator.serviceWorker.ready.then(function() { console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ") })) : ue(e)
                        })
                    }
                }()
        },
        44: function(e, t, a) {},
        71: function(e, t, a) { e.exports = a(174) },
        76: function(e, t, a) {},
        78: function(e, t, a) {},
        80: function(e, t, a) {}
    },
    [
        [71, 2, 1]
    ]
]);
//# sourceMappingURL=main.9815773d.chunk.js.map