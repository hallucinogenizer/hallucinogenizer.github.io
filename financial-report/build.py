#!/usr/bin/env python
"""Generate the FY26 financial report HTML. All chart geometry computed, not hand-written."""
import json, html

D = "/private/tmp/claude-502/-Users-rohanhussain-dev-financial-report/3cfa7f49-8dc0-487d-a418-c6ad1a703e29/scratchpad/data"
OUT = "/Users/rohanhussain/dev/financial-report/financial-report-fy26/index.html"

liq = json.load(open(f"{D}/liquidity.json"))

MONTHLY = [
    ("Jul 25",  950728,  754296), ("Aug 25",  645265,  600253), ("Sep 25", 2061651, 1065395),
    ("Oct 25", 1005320, 1059097), ("Nov 25", 1079712, 1174672), ("Dec 25", 1388230, 1085460),
    ("Jan 26", 4443473, 1594632), ("Feb 26", 1376023, 1272743), ("Mar 26", 1383272, 1122982),
    ("Apr 26", 1381537,  917060), ("May 26", 1379554, 1784932), ("Jun 26", 1370125, 1096231),
]
CARD = [("Jul 25",0,0),("Aug 25",-147126,-147126),("Sep 25",-95762,-160104),("Oct 25",-41792,-217505),
        ("Nov 25",-69387,-576992),("Dec 25",-225364,-225364),("Jan 26",-37563,-275075),
        ("Feb 26",-25057,-442919),("Mar 26",-60690,-270279),("Apr 26",-40126,-82758),
        ("May 26",-379553,-528480),("Jun 26",-125532,-519190)]
BENEF = [("Rohan / joint household",6357963),("Alishba (wife)",3265342),("Abujan (father)",873553),
         ("Wife's family",770701),("Mama (mother)",605236),("Cats — JJ & Lily",577108),
         ("Friends",564575),("Donations / charity",320937),("Aliyan & Minahil",129178),
         ("Umaid, Fiza, Mahad",63160)]
RECOVERY = [("Fahad",565189,623295),("Abdul Wahab",156813,155036),("Aliyan",571153,556276),
            ("Wasiq",2318734,2196814),("Ahmad Bhatti",3473809,3268678),("Aun",349783,310562),
            ("Alishba",873156,634186),("Mama",822236,559000),("Tabish",1611576,410871),
            ("Danish",2081699,412000),("Abdul Sami",426282,25000)]
CATS = [("Family",5723585),("Technology",1248856),("Household",1195104),("Transportation",1163837),
        ("Food",914030),("Miscellaneous",658409),("Donation",581146),("Tour/Travel",457875),
        ("Beauty",375485),("Social Life",217217),("Tax",217012),("Apparel",202127),
        ("Health",184014),("Self-development",111019),("Other — Culture, bank charges, religion, investment, entertainment, work, education",278037)]

def money(n, sign=False):
    s = f"{abs(int(round(n))):,}"
    if sign: return ("−" if n < 0 else "+") + s
    return ("−" if n < 0 else "") + s

def lakh(n):
    """Pakistani lakh/crore shorthand."""
    n = float(n)
    if abs(n) >= 1e7: return f"{n/1e7:.2f} cr"
    return f"{n/1e5:.2f} L"

# ───────────────────────── chart builders ─────────────────────────
def chart_income_spend():
    W,H = 780, 300; L,R,T,B = 58,14,18,44
    pw, ph = W-L-R, H-T-B
    mx = 4600000
    n = len(MONTHLY); step = pw/n; bw = min(17, step/2.9)
    g = []
    for gy in range(0, 5000000, 1000000):
        y = T+ph-(gy/mx)*ph
        g.append(f'<line class="grid" x1="{L}" y1="{y:.1f}" x2="{W-R}" y2="{y:.1f}"/>')
        g.append(f'<text class="ax" x="{L-8}" y="{y+4:.1f}" text-anchor="end">{int(gy/100000)}L</text>')
    for i,(m,inc,sp) in enumerate(MONTHLY):
        cx = L+step*i+step/2
        hi = (inc/mx)*ph; hs = (sp/mx)*ph
        g.append(f'<rect class="s1" x="{cx-bw-1:.1f}" y="{T+ph-hi:.1f}" width="{bw:.1f}" height="{hi:.1f}" rx="3"><title>{m} income {money(inc)}</title></rect>')
        g.append(f'<rect class="s2" x="{cx+1:.1f}" y="{T+ph-hs:.1f}" width="{bw:.1f}" height="{hs:.1f}" rx="3"><title>{m} spend {money(sp)}</title></rect>')
        g.append(f'<text class="ax" x="{cx:.1f}" y="{H-B+16}" text-anchor="middle">{m.split()[0]}</text>')
    # annotate the January settlement spike
    cx = L+step*6+step/2
    g.append(f'<text class="note" x="{cx-6:.1f}" y="{T+ph-(4443473/mx)*ph-8:.1f}" text-anchor="middle">settlement</text>')
    cx5 = L+step*10+step/2
    g.append(f'<text class="note" x="{cx5+8:.1f}" y="{T+ph-(1784932/mx)*ph-8:.1f}" text-anchor="middle">peak spend</text>')
    g.append(f'<line class="base" x1="{L}" y1="{T+ph}" x2="{W-R}" y2="{T+ph}"/>')
    return f'<svg viewBox="0 0 {W} {H}" class="cv" role="img" aria-label="Monthly net income versus personal spend">{"".join(g)}</svg>'

def chart_cover():
    W,H = 780, 260; L,R,T,B = 58,14,20,44
    pw, ph = W-L-R, H-T-B
    vals = [(r["month"], r["free"]) for r in liq[1:]]
    mx, mn = 1600000, -500000
    span = mx-mn
    def yy(v): return T+ph-((v-mn)/span)*ph
    n=len(vals); step=pw/n; bw=min(26, step*0.55)
    g=[]
    for gy in (-500000,0,500000,1000000,1500000):
        y=yy(gy)
        g.append(f'<line class="grid" x1="{L}" y1="{y:.1f}" x2="{W-R}" y2="{y:.1f}"/>')
        g.append(f'<text class="ax" x="{L-8}" y="{y+4:.1f}" text-anchor="end">{int(gy/100000)}L</text>')
    y1=yy(1127313)
    g.append(f'<line class="ref" x1="{L}" y1="{y1:.1f}" x2="{W-R}" y2="{y1:.1f}"/>')
    g.append(f'<text class="reflab" x="{W-R-4}" y="{y1-7:.1f}" text-anchor="end">one month of spending (11.27L)</text>')
    z=yy(0)
    for i,(m,v) in enumerate(vals):
        cx=L+step*i+step/2
        y=yy(v); cls = "neg" if v<0 else "s1"
        top=min(y,z); h=abs(y-z)
        g.append(f'<rect class="{cls}" x="{cx-bw/2:.1f}" y="{top:.1f}" width="{bw:.1f}" height="{max(h,1):.1f}" rx="3"><title>{m}: {money(v)} free liquid</title></rect>')
        g.append(f'<text class="ax" x="{cx:.1f}" y="{H-B+16}" text-anchor="middle">{m.split()[0]}</text>')
    cxd=L+step*5+step/2
    g.append(f'<text class="note neg-t" x="{cxd:.1f}" y="{yy(-364380)+16:.1f}" text-anchor="middle">−3.6L</text>')
    cxj=L+step*11+step/2
    g.append(f'<text class="note" x="{cxj:.1f}" y="{yy(212900)-8:.1f}" text-anchor="middle">2.1L</text>')
    g.append(f'<line class="base" x1="{L}" y1="{z:.1f}" x2="{W-R}" y2="{z:.1f}"/>')
    return f'<svg viewBox="0 0 {W} {H}" class="cv" role="img" aria-label="Free liquid cash at each month end">{"".join(g)}</svg>'

def hbars(data, total=None, fmt=lambda v: money(v), width=780, rowh=27, label_w=190, cls="s1", pct=False):
    mx = max(v for _,v in data)
    H = rowh*len(data)+10
    bw_avail = width-label_w-116
    g=[]
    for i,(name,v) in enumerate(data):
        y=i*rowh+6
        w=(v/mx)*bw_avail
        g.append(f'<text class="rl" x="{label_w-10}" y="{y+13}" text-anchor="end">{html.escape(name)}</text>')
        g.append(f'<rect class="{cls}" x="{label_w}" y="{y+2}" width="{max(w,2):.1f}" height="15" rx="3"><title>{html.escape(name)}: {fmt(v)}</title></rect>')
        extra = f" · {v/total*100:.1f}%" if total else ""
        g.append(f'<text class="rv" x="{label_w+w+8:.1f}" y="{y+14}">{fmt(v)}{extra}</text>')
    return f'<svg viewBox="0 0 {width} {H}" class="cv" role="img">{"".join(g)}</svg>'

def chart_recovery():
    W=780; rowh=27; L=132; H=rowh*len(RECOVERY)+26
    bw=W-L-150
    g=[]
    for i,(name,adv,rep) in enumerate(RECOVERY):
        pct=100*rep/adv; y=i*rowh+16
        w=(min(pct,100)/100)*bw
        cls = "good" if pct>=85 else ("warn" if pct>=60 else "critical")
        g.append(f'<text class="rl" x="{L-10}" y="{y+13}" text-anchor="end">{name}</text>')
        g.append(f'<rect class="track" x="{L}" y="{y+2}" width="{bw}" height="15" rx="3"/>')
        g.append(f'<rect class="{cls}" x="{L}" y="{y+2}" width="{max(w,2):.1f}" height="15" rx="3"><title>{name}: {money(rep)} back of {money(adv)}</title></rect>')
        g.append(f'<text class="rv" x="{L+bw+8}" y="{y+14}">{pct:.0f}% · {lakh(adv)} out</text>')
    x85=L+0.85*bw
    g.append(f'<line class="ref" x1="{x85}" y1="10" x2="{x85}" y2="{H-8}"/>')
    g.append(f'<text class="reflab" x="{x85+4}" y="10">85%</text>')
    return f'<svg viewBox="0 0 {W} {H}" class="cv" role="img" aria-label="Lifetime repayment rate by counterparty">{"".join(g)}</svg>'

def chart_card():
    W,H=780,250; L,R,T,B=58,14,20,44
    pw,ph=W-L-R,H-T-B
    mx=620000
    n=len(CARD); step=pw/n; bw=min(17,step/2.9)
    g=[]
    for gy in range(0,700000,200000):
        y=T+(gy/mx)*ph
        g.append(f'<line class="grid" x1="{L}" y1="{y:.1f}" x2="{W-R}" y2="{y:.1f}"/>')
        g.append(f'<text class="ax" x="{L-8}" y="{y+4:.1f}" text-anchor="end">{int(gy/100000)}L</text>')
    for i,(m,close,peak) in enumerate(CARD):
        cx=L+step*i+step/2
        hp=(abs(peak)/mx)*ph; hc=(abs(close)/mx)*ph
        g.append(f'<rect class="s2 dim" x="{cx-bw-1:.1f}" y="{T}" width="{bw:.1f}" height="{hp:.1f}" rx="3"><title>{m} peak debt {money(peak)}</title></rect>')
        g.append(f'<rect class="s1" x="{cx+1:.1f}" y="{T}" width="{bw:.1f}" height="{hc:.1f}" rx="3"><title>{m} month-end {money(close)}</title></rect>')
        g.append(f'<text class="ax" x="{cx:.1f}" y="{H-B+16}" text-anchor="middle">{m.split()[0]}</text>')
    ylim=T+(1000000/mx)*ph
    cxn=L+step*4+step/2
    g.append(f'<text class="note" x="{cxn:.1f}" y="{T+(576992/mx)*ph+16:.1f}" text-anchor="middle">5.77L peak</text>')
    g.append(f'<line class="base" x1="{L}" y1="{T}" x2="{W-R}" y2="{T}"/>')
    return f'<svg viewBox="0 0 {W} {H}" class="cv" role="img" aria-label="Credit card debt by month, peak within month and at month end">{"".join(g)}</svg>'

def chart_spring():
    W,H=780,116
    paid=4697803; poss=3101200; rest=15506001-paid-poss
    L=0; bw=W
    tot=15506001
    g=[]
    x=0
    for label,v,cls in [("Paid to date",paid,"s1"),("Payment on possession",poss,"critical"),("Remaining instalments to 2030",rest,"track2")]:
        w=v/tot*bw
        g.append(f'<rect class="{cls}" x="{x+ (2 if x>0 else 0):.1f}" y="24" width="{max(w-2,2):.1f}" height="30" rx="3"><title>{label}: {money(v)}</title></rect>')
        g.append(f'<text class="seg" x="{x+w/2:.1f}" y="70" text-anchor="middle">{lakh(v)}</text>')
        g.append(f'<text class="seg2" x="{x+w/2:.1f}" y="86" text-anchor="middle">{v/tot*100:.0f}%</text>')
        x+=w
    g.append(f'<text class="rl" x="0" y="14">Contract net price {money(tot)} · 1-bed, 815 sqft, The Springs, Canal Road</text>')
    g.append(f'<text class="seg3" x="{paid/tot*bw + poss/tot*bw/2:.1f}" y="106" text-anchor="middle">due ~Dec 2026</text>')
    return f'<svg viewBox="0 0 {W} {H}" class="cv" role="img" aria-label="Spring apartment payment progress">{"".join(g)}</svg>'

# ───────────────────────── page ─────────────────────────
CSS = """
:root{
  --bg:#f9f9f7; --surface:#fcfcfb; --ink:#0b0b0b; --ink2:#52514e; --muted:#898781;
  --grid:#e1e0d9; --base:#c3c2b7; --rule:rgba(11,11,11,.10);
  --s1:#2a78d6; --s2:#eb6834; --s3:#1baf7a;
  --good:#0ca30c; --warn:#fab219; --critical:#d03b3b; --track:#e9e8e2; --track2:#d5d4cc;
  --callout:#f2f1ed;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --bg:#0d0d0d; --surface:#1a1a19; --ink:#fff; --ink2:#c3c2b7; --muted:#898781;
    --grid:#2c2c2a; --base:#383835; --rule:rgba(255,255,255,.10);
    --s1:#3987e5; --s2:#d95926; --s3:#199e70;
    --good:#0ca30c; --warn:#fab219; --critical:#d03b3b; --track:#2c2c2a; --track2:#3a3a37;
    --callout:#201f1e;
  }
}
:root[data-theme="dark"]{
  --bg:#0d0d0d; --surface:#1a1a19; --ink:#fff; --ink2:#c3c2b7; --muted:#898781;
  --grid:#2c2c2a; --base:#383835; --rule:rgba(255,255,255,.10);
  --s1:#3987e5; --s2:#d95926; --s3:#199e70;
  --good:#0ca30c; --warn:#fab219; --critical:#d03b3b; --track:#2c2c2a; --track2:#3a3a37;
  --callout:#201f1e;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
  font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6;
  -webkit-font-smoothing:antialiased;font-size:16px}
.wrap{max-width:860px;margin:0 auto;padding:56px 24px 120px}
header.top{border-bottom:1px solid var(--rule);padding-bottom:30px;margin-bottom:44px}
.kicker{font-size:12.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);font-weight:600}
h1{font-size:clamp(30px,5vw,42px);line-height:1.14;margin:14px 0 12px;letter-spacing:-.02em;font-weight:680}
.sub{color:var(--ink2);font-size:17px;margin:0;max-width:62ch}
h2{font-size:13px;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);
  font-weight:700;margin:60px 0 6px;padding-top:22px;border-top:1px solid var(--rule)}
h3{font-size:20px;margin:32px 0 8px;letter-spacing:-.01em;font-weight:640}
.lede{font-size:20px;line-height:1.5;color:var(--ink);margin:8px 0 26px;letter-spacing:-.01em}
p{margin:0 0 16px;color:var(--ink2)}
p strong,li strong{color:var(--ink);font-weight:620}
.hero{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1px;
  background:var(--rule);border:1px solid var(--rule);border-radius:10px;overflow:hidden;margin:28px 0 8px}
.hero div{background:var(--surface);padding:16px 18px;display:flex;flex-direction:column}
.hero .lbl{font-size:11.5px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);
  font-weight:600;min-height:2.6em}
.hero .val{font-size:25px;font-weight:660;letter-spacing:-.02em;margin-top:2px;color:var(--ink)}
.hero .note{font-size:12.5px;color:var(--muted);margin-top:auto;padding-top:8px;line-height:1.4}
.card{background:var(--surface);border:1px solid var(--rule);border-radius:10px;padding:22px;margin:26px 0}
figure{margin:26px 0}
figcaption{font-size:13.5px;color:var(--muted);margin-top:12px;line-height:1.5}
.legend{display:flex;gap:18px;flex-wrap:wrap;font-size:13px;color:var(--ink2);margin:0 0 12px}
.legend span{display:inline-flex;align-items:center;gap:7px}
.sw{width:11px;height:11px;border-radius:2.5px;display:inline-block}
.cv{width:100%;height:auto;display:block;overflow:visible}
.grid{stroke:var(--grid);stroke-width:1}
.base{stroke:var(--base);stroke-width:1}
.ref{stroke:var(--s2);stroke-width:1;stroke-opacity:.75}
.reflab{fill:var(--s2);font-size:10.5px;font-weight:600}
.ax{fill:var(--muted);font-size:11px}
.rl{fill:var(--ink2);font-size:12.5px}
.rv{fill:var(--muted);font-size:11.5px;font-variant-numeric:tabular-nums}
.note{fill:var(--ink2);font-size:11px;font-weight:600}
.neg-t{fill:var(--critical)}
.seg{fill:var(--ink);font-size:13px;font-weight:660}
.seg2{fill:var(--muted);font-size:11px}
.seg3{fill:var(--critical);font-size:11.5px;font-weight:600}
rect.s1{fill:var(--s1)} rect.s2{fill:var(--s2)} rect.s3{fill:var(--s3)}
rect.dim{fill-opacity:.42}
rect.good{fill:var(--good)} rect.warn{fill:var(--warn)} rect.critical{fill:var(--critical)}
rect.neg{fill:var(--critical)}
rect.track{fill:var(--track)} rect.track2{fill:var(--track2)}
.tw{overflow-x:auto;margin:22px 0;border:1px solid var(--rule);border-radius:10px;background:var(--surface)}
table{border-collapse:collapse;width:100%;font-size:14.5px;min-width:430px}
th,td{padding:10px 14px;text-align:right;border-bottom:1px solid var(--rule)}
th,td{text-align:right}
td.t,th.t{text-align:left}
td.n,th.n{text-align:right;font-variant-numeric:tabular-nums}
thead th{font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:650}
tbody tr:last-child td{border-bottom:none}
tbody td{font-variant-numeric:tabular-nums;color:var(--ink2)}
tbody td:first-child{color:var(--ink)}
tr.tot td{font-weight:660;color:var(--ink);border-top:1px solid var(--base)}
.pos{color:var(--good)} .negv{color:var(--critical)}
blockquote{margin:26px 0;padding:18px 22px;background:var(--callout);
  border-left:3px solid var(--s1);border-radius:0 8px 8px 0}
blockquote p:last-child{margin-bottom:0}
blockquote.alert{border-left-color:var(--critical)}
blockquote.ok{border-left-color:var(--good)}
ul,ol{color:var(--ink2);padding-left:22px;margin:0 0 18px}
li{margin-bottom:9px}
.tag{display:inline-block;font-size:11px;letter-spacing:.06em;text-transform:uppercase;
  font-weight:650;padding:3px 8px;border-radius:5px;background:var(--callout);color:var(--ink2)}
.tag.bad{background:rgba(208,59,59,.13);color:var(--critical)}
.tag.good{background:rgba(12,163,12,.13);color:var(--good)}
footer{margin-top:70px;padding-top:26px;border-top:1px solid var(--rule);
  font-size:13px;color:var(--muted)}
.big{font-size:clamp(34px,6vw,52px);font-weight:680;letter-spacing:-.03em;color:var(--ink);
  line-height:1.05;margin:6px 0 10px}
"""

def _isnum(v):
    t = str(v).replace(",", "").replace("−", "").replace("+", "").replace("%", "")
    t = t.replace("=", "").replace("L", "").replace("cr", "").replace("/month", "").strip()
    if not t: return False
    try:
        float(t); return True
    except ValueError:
        return False

def table(headers, rows, tot=None, cls=""):
    ncol = len(headers)
    # a column is numeric only if every non-empty body cell in it parses as a number
    numeric = []
    for j in range(ncol):
        vals = [r[j] for r in rows if j < len(r) and str(r[j]).strip()]
        numeric.append(bool(vals) and all(_isnum(v) for v in vals))
    kls = ["n" if numeric[j] else "t" for j in range(ncol)]
    kls[0] = "t"
    h = "".join(f'<th class="{kls[j]}">{c}</th>' for j, c in enumerate(headers))
    body = ""
    for r in rows:
        klass = ' class="tot"' if r is tot else ""
        body += f"<tr{klass}>" + "".join(f'<td class="{kls[j]}">{c}</td>' for j, c in enumerate(r)) + "</tr>"
    return f'<div class="tw"><table class="{cls}"><thead><tr>{h}</tr></thead><tbody>{body}</tbody></table></div>'

TOTAL_PERSONAL = 13527753

body = f"""
<header class="top">
  <div class="kicker">Fiscal year 1 July 2025 – 30 June 2026 · Rohan Hussain</div>
  <h1>You earned 1.85 crore, saved a fifth of it, gave away more than half of what you spent, and ended the year with five days of cash.</h1>
  <p class="sub">Both halves of that sentence are true, and neither is a mistake in the arithmetic.
  This report is built from 8,811 ledger rows, your tax-filing income sheet, and the Springs contract.
  Every figure was recomputed independently and adversarially checked.</p>
</header>

<div class="hero">
  <div><div class="lbl">Net own earnings</div><div class="val">1.85 cr</div><div class="note">{money(18464890)} · 15.39 L/mo</div></div>
  <div><div class="lbl">Spending incl. gifts</div><div class="val">1.47 cr</div><div class="note">{money(14747871)} · 12.29 L/mo</div></div>
  <div><div class="lbl">Spent on others</div><div class="val">56.9%</div><div class="note">{money(8389908)} of it</div></div>
  <div><div class="lbl">Net worth</div><div class="val">+35.8 L</div><div class="note">22.0 L → 57.8 L · 2.63× · after writing off qarz</div></div>
  <div><div class="lbl">Free liquid at close</div><div class="val negv">1.8 L</div><div class="note">0.16 months · 4.8 days</div></div>
</div>

<h2>The verdict, first</h2>
<p class="lede">You are not overspending, and you are not bad with money. You are running a
structurally illiquid balance sheet, and the cause is not generosity — it is the order in which
you fund things.</p>

<p>Three things are simultaneously true about your year, and holding all three at once is the
whole point of this report.</p>

<ol>
<li><strong>You saved a fifth of a 1.85-crore income.</strong> On the ledger, net worth went from
{money(2341180)} to {money(7142897)} and the reconciliation is exact to the rupee. But
{money(1360998)} of that closing figure is qarz to Tabish and Abdul Sami that you do not expect back,
so on an honest basis net worth is {money(5781899)} and the year's saving is {money(3581599)}:
<strong>19.4%, not 26%</strong>. Still a strong year. Just not the one the ledger reports.</li>
<li><strong>Almost none of it is reachable.</strong> Free liquid cash fell from {money(1113266)} to
{money(212900)}, or {money(181851)} once the sanctions-blocked Wise balance comes out. You spent 79%
of the year holding less than one month of expenses, and on 31 December the figure was negative.</li>
<li><strong>The generosity is larger than the categories admit, and mostly not the problem.</strong>
Once the qarz is counted as the giving it is, <strong>56.9% of your outgoings — {money(8389908)} of
{money(14747871)} — went to someone other than you.</strong> What hurt you was not the level. It was
funding it out of your buffer and your investments rather than out of surplus, and then borrowing back
from the same people when you ran short.</li>
</ol>

<p>And one framing that the rest of this report will keep returning to, because it is the single most
useful thing in it: <strong>you did not overspend, you over-committed.</strong> Those are different
failures with different fixes, and almost everything that went wrong this year followed from the
second one.</p>

<blockquote class="alert">
<p><strong>The comparison that frames the year.</strong> The Springs possession payment is
{money(3101200)}. What you have lent to Danish, Tabish and Abdul Sami is {money(3008498)}, and those
three have repaid 20%, 25% and 6% of everything they have ever received.</p>
<p>The largest single obligation in front of you is almost exactly the money you have out with three
people. Your salary now covers that obligation, so this is not a crisis. But it is the year's central
decision stated as arithmetic: you have parked the price of the apartment with three men who do not
repay, and you are funding the apartment out of cash flow instead.</p>
</blockquote>

<h2>What came in</h2>
<p>Your tax sheet and the app disagree, and both are right — they measure different things. The
bridge closes to within 242 rupees, which is the strongest evidence that your record-keeping is sound.</p>

{table(["Basis","Amount","What it is"], [
 ("Cash credited to bank", money(19618284), "Everything that hit your accounts"),
 ("Ledger gross income", money(19192998), "As recorded, incl. provident-fund accruals, fund profit, plugs"),
 ("Net own earnings", money(18464890), "Your tax-sheet basis: strips contractor pass-through and workspace reimbursement"),
])}

<p>The gap between credited and net own earnings is {money(1153394)}: {money(512176)} of FleetGlue
workspace reimbursement that rode inside your payroll deposits, and {money(824677)} of Turing
contractor pay that passed straight through you to Hammad, Xoraiz, Haroon and Maryam.</p>

<blockquote>
<p><strong>Worth five minutes before your next filing.</strong> Those two deductions sum to
{money(1336853)} — about {money(183459)} <em>more</em> than the actual gap. Xoraiz's three Turing
payouts total {money(193774)}, within 0.5% of that residual. If his payments were left out of your
pass-through deduction, you declared roughly 1.83 lakh more income than you earned. You
over-declared, not under-declared, but it is still worth checking.</p>
</blockquote>

<h3>The raise backfilled a loss rather than stacking on top of it</h3>
<p>FleetGlue pays 2.10× what Beyond ONE paid you in cash salary. That is the number you probably
carry in your head, and it is correct. But Turing stopped in the same quarter, and not by your
choice — Turing benched you when they ran out of projects, not for performance.</p>

{table(["Period","All-in own earnings, monthly","Composition"], [
 ("Jul–Oct 2025", money(1262270), "Beyond ONE total comp + Turing net margin"),
 ("Mar–Jun 2026", money(1371624), "FleetGlue only, net of side-venture losses"),
 ("Change", "+8.7%", "Salary doubled; real earning power moved under 10%"),
])}

<p>Turing was a <strong>65.8% gross-margin business</strong>: {money(2409080)} of revenue,
{money(824677)} of contractor cost, {money(1584403)} of margin — from four months of activity, and
8.6% of your net own earnings.</p>

<p>You did not end it — Turing benched you for want of projects. The reason that matters here is
not the story, it is what it proves about your structure: <strong>an income stream worth
{money(1584403)} a year at a 65.8% margin disappeared with no notice, through no fault of yours, and
never came back.</strong> Revenue was still growing when it stopped ({money(387879)} for June work,
{money(720299)} for August).</p>

<p>You spent the first four months of the year with two independent incomes. You have spent every
month since with one. That is the real change in your financial position, and it is larger than the
pay rise.</p>

<h3>What one employer is now carrying</h3>
<p>These are the obligations that do not pause if income does. They are owed to your wife, your
parents, a property developer and a committee — none of whom stop when a pipeline dries up.</p>

{table(["Commitment that survives a job loss","Annual","Monthly"], [
 ("Stipends at exit run-rate — Alishba 150k, Abujan 80k, Mama 50k", money(3360000), money(280000)),
 ("The Springs — contractual, 474,301 per quarter", money(1897204), money(158100)),
 ("Rohan Committee", money(1800000), money(150000)),
 ("Utilities, internet, mobile, domestic help, car insurance and token tax", money(761402), money(63450)),
 ("Live subscriptions", money(104002), money(8667)),
 ("Total", money(7922608), money(660217)),
])}

<blockquote class="alert">
<p><strong>{money(660217)} a month continues whether or not you are being paid.</strong> Against
{money(141776)} of free liquid today — once the stranded Wise balance is removed — that is
<strong>6.4 days of commitments</strong>, not of lifestyle.</p>
<p>Turing is the proof this is not hypothetical. It is also the argument for the buffer, stated
better than any savings-rate figure can: you are not building a reserve against bad decisions, you
are building one against a decision somebody else makes about you.</p>
</blockquote>

<h3>tripbazar.pk is a purchase, not a business — so price it like one</h3>
<p>You have been clear that revenue was never the point: you wanted the thing to exist, to be useful,
and to be yours. Revenue is therefore the wrong test for it, so it is not the test applied here.</p>

<p>It costs {money(82934)} to date, and the cost is <strong>capped by design</strong>. Sadiqa works
two hours a day on weekdays at Rs 500 an hour, and will not exceed that allowance. So the ceiling is
arithmetic: 261 weekdays × 2 hours × Rs 500 = <strong>{money(261000)} a year</strong>, about
{money(21750)} a month.</p>

<p>The salary looked like it was escalating — 14,667 → 17,334 → 18,275 → 23,308 across April to July
2026, up 59%. It was not. That is her <em>utilisation</em> climbing toward the allowance, and by July
it had reached it:</p>

{table(["Work month","Paid","Hours","Hours available","Utilisation"], [
 ("Apr 2026","14,667","29.3","44 (22 weekdays)","67%"),
 ("May 2026","17,334","34.7","42 (21 weekdays)","83%"),
 ("Jun 2026","18,275","36.5","44 (22 weekdays)","83%"),
 ("Jul 2026","23,308","46.6","46 (23 weekdays)","101%"),
])}

<p>So this line is now at its ceiling and should flatten at roughly {money(21750)} a month — one of
the few genuinely predictable numbers in your finances, and about 1.9% of monthly spend. It needs no
budget because it already has one built into the arrangement. Treat it as settled.</p>

<p>One ledger note rather than a financial one: these salary rows are filed inconsistently — May 2026
sits under <em>Entertainment</em> while the rest sit under <em>Entrepreneurship</em> — so no
category-level report will ever show you what the site actually costs. Worth a one-minute
re-categorisation if you want the number to be visible to your future self.</p>

<p><strong>Web Dev C7</strong>, by contrast, was a revenue attempt and it did not work: five
enrolments worth 46,000, four refunded within three weeks, against C6's {money(103600)} the year
before. On the ledger that business is closed.</p>

<h2>Where it went</h2>
<figure>
<div class="legend">
  <span><i class="sw" style="background:var(--s1)"></i>Net own income</span>
  <span><i class="sw" style="background:var(--s2)"></i>Personal spend</span>
</div>
{chart_income_spend()}
<figcaption>January's spike is the Beyond ONE final settlement ({money(2357732)}). May is the year's
peak spend — the hair transplant, Skardu, and Areeba's hospital bills landing in one fortnight.
Only two months ran an accounting deficit: August 2025 (−20,195) and May 2026 (−409,611).</figcaption>
</figure>

{table(["Category","Amount","Share"], [
 (c, money(v), f"{v/TOTAL_PERSONAL*100:.1f}%") for c,v in CATS
] + [("Total", money(TOTAL_PERSONAL), "100%")], tot=("Total", money(TOTAL_PERSONAL), "100%"))}

<h3>Nearly a third of the year was structurally unrepeatable</h3>
<p>35 identifiable one-off events account for <strong>{money(4015994)} — 29.7% of personal
spend</strong>. Strip them and the run-rate falls from 11.27 L/month to 7.93 L/month.</p>

<p>But do not budget on 7.93 L. The allowances stepped up permanently in January, so the second half
ran at 8.90 L/month against the first half's 6.95 L. <strong>Your forward run-rate is about
8.9–9.0 L/month</strong>, before the new commitments.</p>

{table(["One-off","Amount","Recurs?"], [
 ("Device refresh — MacBook Pro M3 Pro 4.10L, OnePlus 13 all-in 3.53L, Alishba's iPhone 15 Pro Max 3.40L, monitors, speakers, UPS, router", money(1636896), "Every 4–5 years"),
 ("Skardu trip", money(403347), "Annual, but 2.8× your 3-year average"),
 ("Hair transplant, all-in across 5 categories", money(396180), "No"),
 ("Other people's medical emergencies — Azam Uncle's angioplasty 2.28L the largest", money(437392), "No ceiling, no insurance"),
 ("Weddings and social obligation — Maryam's jahez the bulk", money(387258), "Season-dependent"),
 ("JJ's FIP course — 2.10L of it GS-441524 vials in 32 days", money(275840), "No, course complete"),
 ("Kaffara pledge penalties, all in a 6-week burst Jul–Aug 2025", money(101000), "Behavioural"),
])}

<p>Two details from that table are worth pulling out. The OnePlus 13 cost <strong>1.48× its sticker
price</strong> — {money(239060)} handset plus {money(114000)} of PTA import tax landing two months
later as a separate shock; budget any future import at 150%. And the hair transplant is scattered
across five categories, so a Beauty groupby sees only {money(345264)} of the {money(396180)} — the
15,000 paid to the technicians sits under Donation.</p>

<blockquote>
<p><strong>Without the one-offs your savings rate would have been 48.5% instead of 26%.</strong>
That 22-point gap is the honest story of the year. You did not overspend on lifestyle. You
compressed a device refresh, a cosmetic procedure, two family medical emergencies, a wedding season
and a cat's FIP course into twelve months.</p>
</blockquote>

<h2>Who it went to</h2>
<p class="lede">Counting the qarz as the giving it is, {money(8389908)} of your {money(14747871)} of
outgoings — 56.9% — was consumed by someone other than you.</p>

<p>The chart below is the expense ledger alone, which is the 53.0% version ({money(7169790)} of
{money(TOTAL_PERSONAL)}). It excludes the {money(1220118)} you gave Tabish and Abdul Sami during the
year, because the ledger books that as lending rather than spending.</p>

<figure>
{hbars(BENEF, total=TOTAL_PERSONAL, label_w=200)}
<figcaption>Attributed by name from the transaction note, not the category. Where the note and the
reimbursement description name different people, the note wins — the description usually names who
paid you back. "Rohan / joint household" is a ceiling, not a floor: unnamed food and household rows
are shared too, so the real share going to others is higher than 53%.</figcaption>
</figure>

<p><strong>Alishba at {money(3265342)} costs more than both your parents combined, twice over.</strong>
Her stipend is {money(1609922)} of that; the other {money(1626955)} is everything else — so she costs
roughly double her own allowance. Net of identified reimbursements from her, call it 29.4–30.5 lakh.</p>

{table(["Target month","Alishba base stipend","Extra top-ups"], [
 ("Aug 2025","75,000","—"),("Sep 2025","100,000","—"),("Oct 2025","93,462","—"),("Nov 2025","100,000","—"),
 ("Dec 2025","150,000","—"),("Jan 2026","150,000","90,000"),
 ("Feb 2026","150,000","25,000"),("Mar 2026","150,000","30,000"),
 ("Apr 2026","150,000","30,000"),("May 2026","150,000","—"),
 ("Jun 2026","100,000 gross / 50,000 net","—"),
])}

<p>Two step-ups — +33% in September, +50% in December — doubled the base in four months. The
"Extra" payments are the part worth noticing: they ran 25–30k a month from January to April and
functioned as a second, undeclared stipend. Anyone budgeting 150k for her was under by ~18% for
four months running.</p>

<p><strong>Your father's stipend is mostly not pocket money.</strong> It doubled from 35,000 to
80,000 in January (+129%), but of the {money(929065)} that funded his ledger, {money(307500)} is
Sahowari electricity, {money(159000)} is caretakers and handymen, {money(98570)} is family dinners,
{money(24000)} is club dues. It is structurally a household-running cost that will inflate with
tariffs whether or not you ever raise the stipend. All-in cost of his care: about
{money(799766)}–{money(877866)} depending on whether you count the Qurbani and the geyser that were
merely paid through his ledger. There is <strong>no double-counting</strong> — I checked, and the
funding rows are transfers while the stipend rows are expenses.</p>

<p><strong>The wife's side of the family cost {money(770701)}</strong>, of which {money(343943)} is
medical. Azam Uncle's angioplasty was {money(347258)} gross across 23 rows in five weeks — but he
sent {money(100000)} back, and that reimbursement is invisible in the expense ledger because it
arrived as a transfer. Net, about {money(247258)}. Areeba's LUMS course was {money(56212)}, her CMH
admission {money(55604)}. Maryam's wedding cost you about {money(184893)} spread across the Donation and
Family categories, where no category-level report will ever surface it as spending on one person.</p>

<p><strong>The cats cost {money(577108)}</strong> — 4.3% of personal spend — and 48% of that was
JJ getting sick. His FIP course was {money(277284)}, of which {money(210000)} was
four GS-441524 payments compressed into 32 days. That course is finished and drops out of next year;
baseline cat ownership is about {money(178420)}, roughly 15,000 a month. A further {money(113493)} went on animals that
aren't yours — stray cat food, a stray kitten's vet bills, a donation to Laiba's FIP case.</p>

<h2>The liquidity paradox</h2>
<p class="lede">You saved a fifth of your income and finished the year with less spendable cash than
you started. This is the single most important pattern in your finances.</p>

<figure>
{chart_cover()}
<figcaption>Free liquid cash at each month end: bank, cash, wallets, mutual fund and brokerage, less
the credit-card balance and less money you were holding for or had borrowed from others. Your
parents' 15.05 lakh is excluded as long-term capital. December 2025 is negative because you were
holding {money(493903)} of other people's money at the time.</figcaption>
</figure>

<p>Here is where the {money(4801717)} of net-worth growth physically went. This is a complete
bridge, not a selection — every account that moved during the year is in it, and it sums exactly:</p>

{table(["Where it went / what funded it","FY26 change"], [
 ("The Springs apartment and the Marina plot file", money(4671502, sign=True)),
 ("Lent to Danish, Tabish and Abdul Sami", money(2728708, sign=True)),
 ("FleetGlue office receivable", money(107301, sign=True)),
 ("Khaliq Younus committee contribution", money(75000, sign=True)),
 ("All other friend and family ledgers, net", money(-54916, sign=True)),
 ("Cash, banks and wallets, net", money(453551, sign=True)),
 ("Borrowed from your parents for Spring", money(-1504980, sign=True)),
 ("Holding Umaid's Spring money at year end", money(-507084, sign=True)),
 ("Borrowed from Wasiq", money(-179927, sign=True)),
 ("Credit-card float grown", money(-125532, sign=True)),
 ("Al Meezan mutual fund drained", money(-575498, sign=True)),
 ("Provident fund encashed and spent", money(-286408, sign=True)),
 ("Net worth growth", money(4801717, sign=True)),
])}

<p><strong>On the committees, since the two are easy to conflate.</strong> The Rohan Committee is
<em>not</em> in the figure above — you paid into it for the first time on 5 July 2026, five days after
this fiscal year closed, so it belongs to FY27. What is in the figure is the {money(75000)} you put
into the <strong>Khaliq Younus committee</strong> on 18 June 2026.</p>

<p>That 75,000 has since changed character. You started that committee and were due to collect in
December; Ahmad Bhatti has taken your turn for his wedding and will repay you the 75,000 in December
instead. So it is no longer a committee position — it is a receivable from Bhatti, and Bhatti is the
best credit in your book (94% lifetime, and a time-weighted balance of {money(24105)} against a
{money(1471020)} peak). The risk is close to nil.</p>

<p>The thing to notice is the date. That 75,000 now lands in <strong>December 2026 — the same month
as the {money(3101200)} possession payment</strong>. It is a small help arriving in an already
crowded month, and it is one more thing that has to actually happen on time.</p>

<p>Spring alone absorbed <strong>94.2% of the entire year's net-worth gain</strong>. A third of it
({money(1504980)}, exactly 33.3%) is your parents' money, on which you have repaid nothing and which
has not moved since 10 November 2025. Your own equity in the apartment is {money(3018522)}.</p>

<blockquote class="alert">
<p><strong>You held less than one month of spending on 289 of 365 days.</strong> Under half a month
on 68 days. Under 300,000 on 20 days. Only three month-ends cleared one month of cover — July,
September and January — and all three were spent down the following month.</p>
</blockquote>

<h3>The mutual fund is not an investment, it is an overdraft you built yourself</h3>
<p>Al Meezan opened the year at {money(622858)} and closed at {money(47360)}. In between,
{money(3053282)} went in across 20 deposits and {money(3650745)} came out across 28 withdrawals —
6.4× turnover, money sitting an average of 57 days. In the account's first six months after opening
it saw <em>zero</em> withdrawals. In FY26 it saw 28.</p>

<p>The largest single use was lending: <strong>{money(1018000)}, 27.9% of everything withdrawn,
went straight out as loans to friends</strong> — and your own notes say so. "For loaning to Bhatti"
(450,000). "Transferred so I can loan money to Tabish for his school principal's father's hospital
emergency" (68,000). "For Danish Daman" (500,000 in two tranches). Your own Spring instalments took
{money(947745)}. Cash-flow rescues took {money(450000)}, including "Salary late, Alishba needs"
(120,000). The last withdrawal of the year, on 29 June: "Wanna start next month from 0/0."</p>

<p>The fund earned 8.4% gross, 4.5% net of losses and fees. It was doing its job. It is now empty,
which means the next lumpy year has to come out of cash flow or credit.</p>

<h2>The credit card treadmill</h2>
<p class="lede">Your read on this is right — but the mechanism is not the one you described, and
that changes the fix.</p>

<figure>
<div class="legend">
  <span><i class="sw" style="background:var(--s1)"></i>Balance at month end</span>
  <span><i class="sw" style="background:var(--s2);opacity:.42"></i>Peak debt within the month</span>
</div>
{chart_card()}
<figcaption>Faysal Noor World. Limit 10 lakh, statement on the 10th. The month-end figure is what
you would see on a statement; the peak is what you actually owed at the worst moment of each month.</figcaption>
</figure>

{table(["Measure","FY26"], [
 ("Charged to the card", money(5305344) + " across 938 rows"),
 ("— of which direct personal expense", money(3578705) + " · 26% of all personal spend"),
 ("Repaid", money(5179812) + " across just 36 payment events"),
 ("Days carrying a balance", "301 of 365"),
 ("Peak debt", money(576992) + " on 27 Nov 2025 · 58% of limit"),
 ("Average bill payment per month", money(431651) + " · 29.4% of average monthly income"),
 ("Interest, markup or late fees paid", "0 — none anywhere in the ledger"),
 ("Actual annual cost", money(26103) + " (26,000 annual fee + 103 of transfer charges)"),
])}

<p>So the cycle is real: <strong>29.4% of every month's income is committed to last month's
spending before the month begins.</strong> That is the treadmill, and 26% of your personal spend
runs on it.</p>

<p>But you are not paying for it in interest — you are paying for it in <em>timing</em>. And here is
the part that is genuinely fixable:</p>

<blockquote>
<p><strong>You pay the card early, on payday, instead of when it is due.</strong> Fifteen payments
totalling {money(2531830)} are labelled by you as "Advance Bill Payment". Fourteen of 36 payments
land on days 1–10 — at or before the statement even generates. The median payment day is the 14th.</p>
</blockquote>

<p>Your statement generates on the 10th and the bill is due at month end. So every purchase buys
you between <strong>18 and 50 days of free credit, averaging 35</strong>, and you are handing most of
that back by paying on payday instead of on the deadline.</p>

<p>I modelled what paying on the due date would actually have done, charge by charge across all 938 of
them. The honest answer is smaller than a first pass suggests, because your credit limit binds:</p>

{table(["Payment policy","Average card balance","Peak","Extra cash you would hold"], [
 ("What you did (pay on payday)", money(153452), money(576992) + " (58% of limit)", "—"),
 ("Pay on the due date, ignoring the limit", money(495188), money(1364208) + " (136% of limit)", money(341736)),
 ("Pay on the due date, capped at 850,000", money(334518), money(850000) + " (85% of limit)", money(181066)),
])}

<p>The middle row is not available to you. February 2026 alone carried {money(1019965)} of charges,
and a pure pay-at-deadline policy would have pushed you through your 10 lakh limit on 27 February. The
realistic version is the third row: pay at the deadline, but make an early top-up in heavy months to
stay clear of the ceiling. That needed 21 such top-ups across the year and yields about
<strong>{money(181066)}</strong> of extra permanent cash, or {money(250000)} if you are willing to run
closer to the limit.</p>

<blockquote>
<p><strong>Size this honestly: it is worth 1.8 to 2.5 lakh, and it is not your biggest lever.</strong>
What recommends it is not size but cost. It is free, it needs no change in what you spend, and it
works from this month.</p>
<p>It also carries one risk your current habit does not. Paying <em>at</em> the deadline costs
nothing; paying <em>after</em> it is penalised heavily. Clearing the card the moment salary lands is
financially suboptimal but operationally safe, because you cannot miss a deadline you have already
beaten by three weeks. Moving to deadline payment trades a small certain loss for a small gain plus a
tail risk: one missed month of markup on a {money(500000)} balance would wipe out a year of the
benefit. So do it with a standing instruction dated a few days before month end, not a reminder. If
you would not trust yourself with that, keep doing what you are doing.</p>
</blockquote>

<p>One correction to how you might be thinking about the limit as a safety net: <strong>your 10-lakh
limit is not a 10-lakh reserve.</strong> Only 50,000 of it is cashable. For a bank transfer to a
property developer — which is what the possession payment is — the card is worth 50,000, not 10 lakh.
It cannot bridge Spring.</p>

<h2>The loan book</h2>
<p class="lede">Your judgment about who to lend to is better than you probably think. Your judgment
about <em>how much</em> and <em>from what money</em> is the problem.</p>

<figure>
{chart_recovery()}
<figcaption>Lifetime repayment rate by counterparty, from inception of the ledger (Dec 2021) to
27 Aug 2026. Green ≥85%, amber 60–85%, red below 60%. Bar length is the recovery rate; the label
shows total ever advanced.</figcaption>
</figure>

<p>Across 4.7 years you have advanced {money(13300430)} and recovered 69% of it. The headline rate is
not the point though, because the book is really two unrelated things: money that circulates, and
money that was never coming back.</p>

<p><strong>The reciprocal set settles reliably.</strong> Fahad 110%, Wahab 99%, Aliyan 97%,
Wasiq 95%, Bhatti 94%, Aun 89%. Ahmad Bhatti is the extreme case: he took {money(2857078)} across
169 advances in FY26 — including {money(1430000)} for a car on 5 December — and returned
{money(2851600)}. That 14.3 lakh was outstanding for <em>under nine hours</em>. His time-weighted
average balance for the whole year was {money(24105)}. He costs you nothing.</p>

<p><strong>The need-based set does not settle at all.</strong> Danish 20%, Tabish 25%,
Abdul Sami 6%. And that is where your money is:</p>

{table(["Person","At 30 Jun 26","Today","Recovery","Advances"], [
 ("Danish", money(1500000), money(1500000), "20%", "16 since Sep 2022"),
 ("Tabish", money(984716), money(1107216), "25%", "104 since Sep 2022"),
 ("Abdul Sami", money(376282), money(401282), "6%", "18 since Sep 2022"),
 ("Three-name total", money(2860998), money(3008498), "—", "—"),
])}

<p>All three closed the year at <strong>their highest balance ever recorded</strong> — FY26 peak
equals FY26 close for each of them. On the currently open balances, genuine repayment is 6,866
against {money(2860998)} outstanding: about 0.2%.</p>

<ul>
<li><strong>Tabish is not a loan, it is a standing subsidy of roughly 78,000 a month.</strong> 104
advances, a median of 10,000 every four days, and the balance rose in 11 of 12 months. Since FY26
closed he has taken another {money(122500)} across nine advances and repaid nothing.</li>
<li><strong>The Danish 15 lakh is 15× your largest prior advance to him</strong>, is three tranches
for emigration costs, has received zero repayment in the 5.5 months since March — and the first
500,000 was not your money. It came directly out of Wasiq's ledger. You borrowed from one friend to
lend to another.</li>
<li><strong>Abdul Sami has had 18 advances over four years against a single ambiguous 25,000
inflow.</strong> Recovery is 6% at best and plausibly zero.</li>
</ul>

<p>Averaged across every day of the year, {money(1417768)} was permanently parked with those three
men — against a time-weighted total of {money(1581193)} in every bank, fund and brokerage you own.
<strong>On 168 of 365 days, what three friends owed you exceeded everything you held.</strong></p>

<blockquote class="alert">
<p><strong>27–28 January 2026 is the whole pattern in two days.</strong></p>
<p>On 27 Jan, the day before your Beyond ONE settlement landed, you borrowed {money(725000)} from
five friends across eight hours — Wahab 100,000 and Wasiq 150,000 at 09:38, Tabish 50,000 and Bhatti
250,000 at 15:08, Danish 175,000 at 16:13. In the middle of that, at 15:21, you spent {money(360000)}
on a MacBook Pro. Your liquid balance that morning was {money(218540)}.</p>
<p>Danish owed you 10 lakh at the time. You borrowed 175,000 from him.</p>
<p>The settlement hit at 15:52 the next day. Within 72 minutes you had repaid all five, cleared
{money(305294)} to the card, closed the {money(193374)} installment plan — and lent Danish a fresh
500,000 for his visa fee and Abdul Sami another 50,000. The largest single inflow of your working
life had a holding period of about an hour.</p>
</blockquote>

<h2>The apartment, and the deadline you are walking into</h2>
<figure>
{chart_spring()}
<figcaption>From the Annexure-A post-possession plan: 1-bed, 815 sqft, apartment 4,168, net price
{money(15506001)} after a 2% trade discount. Your payments reconcile against the contract schedule
to within 5 rupees.</figcaption>
</figure>

<p>You have paid {money(4697803)} — 30.3% of the contract. The instalment schedule runs to
1 July 2030 and includes two balloon payments of {money(620240)} in 2028. The Oct 2026 quarter is
part-paid: {money(174301)} of {money(474301)}.</p>

<p>Then there is the 20% <strong>payment on possession: {money(3101200)}</strong>. Spring say
possession lands around the end of this year, with 60 days' notice. You have told me you do not have
it. Here is what the arithmetic says about that:</p>

<p>Your salary is now <strong>$80,000 a year</strong>, paid in 26 fortnightly instalments of
$3,076.92, with the raise taking effect from the 28 August 2026 payment. It arrives as remittance and
is effectively untaxed at about 0.5%. At 271 to the dollar that is <strong>{money(1797633)} a
month</strong>, up from {money(1483048)} on the old $66,000.</p>

<p>That changes the possession question from "can you?" to "by when?":</p>

{table(["Building the possession payment","Amount"], [
 ("Monthly income, net of 0.5%", money(1797633)),
 ("Less living at last year's 11.27 L run-rate", money(-1127313)),
 ("Less the Rohan Committee contribution", money(-150000)),
 ("Monthly accumulation", money(520320, sign=True)),
 ("Opening free liquid today, net of the stranded Wise", money(141776)),
 ("Plus the Oct 2026 Spring balance still to pay", money(-300600)),
 ("Months of saving needed to reach 3,101,200", "6.3"),
 ("So the money is there from", "around March 2027"),
])}

<p>Two things then make this comfortable rather than tight. Annexure-A puts possession
<em>between 20 and 36 months</em> with 60 days' notice, and since your token was 22 July 2025 the
contractual earliest is roughly March to May 2027 — which is about when the money is there anyway. And
Spring have told you that you may take <strong>up to a year</strong> to make the possession payment
once it is called.</p>

<p>That second point removes the cliff. Spread over twelve months the payment is {money(258433)} a
month, and it can run alongside the quarterly instalments:</p>

{table(["Paying possession over 12 months","Per month"], [
 ("Monthly accumulation on $80,000", money(520320, sign=True)),
 ("Possession payment, 3,101,200 over 12 months", money(-258433, sign=True)),
 ("Quarterly instalments continuing, 474,301 each", money(-158100, sign=True)),
 ("Net, with no rental income", money(103786, sign=True)),
 ("Net, if the flat is let at 70,000", money(173786, sign=True)),
 ("Net, if the flat is let at 80,000", money(183786, sign=True)),
])}

<blockquote>
<p><strong>So the apartment is affordable, on three conditions.</strong> It needs the $80,000 to hold,
it needs your spending to stay near the 11.27 L run-rate, and it needs Spring's year of grace to be
real rather than a verbal courtesy.</p>
<p>That third one is the one to nail down, because the payment plan you signed says nothing about it.
Annexure-A lists "Payment on Possession, 20%, {money(3101200)}" as a single line with no grace period
attached. Three things worth getting in writing before you rely on it:</p>
<ol>
<li>The year to pay, confirmed in writing rather than in conversation.</li>
<li><strong>Whether you get the keys while you are still paying.</strong> This is the financially
important one. If possession is withheld until the 20% is settled, you lose a year of rent — around
{money(900000)} — and the deferral is worth much less than it looks. If you hold the keys and pay over
the year, the rent covers roughly a third of the payment itself.</li>
<li>Whether any markup or late charge attaches to the deferred balance. A year of financing on 31 lakh
is not a rounding error if it is priced.</li>
</ol>
</blockquote>

<blockquote class="alert">
<p><strong>Read the contract on timing before you plan around December.</strong> Annexure-A says
possession falls <em>between 20 and 36 months</em>, communicated 60 days in advance. Your token was
22 July 2025 and the plan was signed in September 2025, so the contractual <em>earliest</em>
possession is around March to May 2027. A December 2026 handover would be roughly five months ahead
of the contract minimum.</p>
<p>That distinction is worth more to you than any spending change in this report. On the $80,000
salary, a December call leaves you {money(1178743)} short and a May call leaves you
{money(1374257)} clear — because both committee payouts land in February and April, before a
spring 2027 deadline and after a December one. Get the expected date in writing.</p>
</blockquote>

<p><strong>On the rental plan:</strong> 70–80k a month on a {money(15506001)} asset is a 5.4–6.2%
gross yield, which is a reasonable Lahore number. But it will not make the apartment self-funding.
Rent of 80,000 gives you {money(240000)} a quarter against a {money(474301)} quarterly instalment —
you would still be short {money(234301)} every quarter until 2030, before maintenance, tax or
vacancy. Possession improves the picture; it does not solve it.</p>

<h2>What next year already owes</h2>
<p>These are commitments, not choices. Two of them did not exist during FY26.</p>

{table(["Commitment","Next 12 months","Note"], [
 ("The Springs — Oct 2026 balance, possession, Jan/Apr/Jul quarters", money(4824103), "Contractual"),
 ("Rohan Committee contributions", money(1800000), "150k/mo; started Jul 2026"),
 ("Aliyan's wedding hall food", money(600000), "600k of 700k outstanding, due ~Feb 2027"),
 ("Personal living at FY26's actual run-rate", money(13527756), "11.27 L/mo"),
 ("Sub-total", money(20751859), ""),
 ("Less committee payouts (Feb + Apr 2027)", money(-1500000), "750k each"),
 ("Total required", money(19251859), "= 16.04 L/month"),
 ("Income, 4 instalments at $66k then 22 at $80k", money(20990806), "= 17.49 L/month"),
 ("Headroom", money(1738947), "= +1.45 L/month"),
])}

<blockquote>
<p><strong>It balances, with about {money(144912)} a month spare.</strong> Worth being clear how
narrow that is: on the old $66,000 salary the same commitments would have run a
{money(1455289)} deficit for the year. The raise is not an improvement to a working plan, it is the
thing that makes the plan work. Your commitments were sized for an income you did not have until
today.</p>
<p>{money(144912)} a month of slack against {money(660217)} a month of obligations means one bad
month still hurts. It is enough to rebuild a buffer over a year. It is not enough to absorb another
FY26 — a device refresh, two medical emergencies, a wedding and a sick cat.</p>
</blockquote>

<p>That is the conservative case. If you held spending to the 8.9 L normalised base instead of last
year's 11.27 L actual, the headroom widens to about 4.83 L a month — but last year's "one-offs" were
a device refresh, two medical emergencies, a wedding and a sick cat, and some version of those
recurs. Budgeting on the base rate is how the 8.9 L becomes 11.27 L again.</p>

<p>Either way it works on paper, and three things still make it fragile. You start from
{money(172825)}. December alone needs {money(4378513)} against {money(1850000)} of income. And the
committee payouts that would help arrive in <em>February and April</em> — two to four months
<em>after</em> the possession payment falls due.</p>

<blockquote class="ok">
<p><strong>The biggest upside variable is not in the table.</strong> If Turing comes back at the rate
it was running, that is roughly {money(1584403)} of margin a year — about 1.32 L a month — on a
65.8% margin with the contractor bench already tested. It would close the possession shortfall on
its own. It is also entirely outside your control, which is exactly why it should not be in the
plan: budget as though it never returns, and treat it as a windfall that rebuilds the buffer rather
than one that gets redeployed within the hour, as the January settlement was.</p>
</blockquote>

<p><strong>On tax:</strong> your pay arrives as remittance and is effectively untaxed at roughly
0.5%, which is why the ledger contains no income tax at all. The {money(217012)} sitting in the Tax
category is phone import duty, a lawyer's filing fee, Spring property tax and one 9,538 withholding.
That is a real structural advantage: a salaried employee taking home {money(1483048)} a month in
Pakistan would be paying several lakh a year that you are not. It is also worth keeping properly
filed and documented, because it is a large position to hold on an informal footing.</p>

<p><strong>One currency note.</strong> You earn in dollars and spend in rupees, so rupee weakness
raises your income in real terms and rupee strength cuts it. On the $80,000 salary, the difference
between 265 and 280 to the dollar is {money(1194000)} a year. That is roughly two Spring quarters,
decided by something entirely outside your control, and it cuts both ways.</p>

<h2>On "wealth is in generosity"</h2>
<p class="lede">You asked me to test this and said I could criticise it. Here is the honest version,
in three parts.</p>

<h3>1. The causal claim is not supported — but a real network-income channel exists, and it worked the other way round</h3>
<p>Your income went from 1.8 lakh a month in 2023 to about 14.8 lakh now, with 18 lakh agreed. That is roughly 8× in three
years and it is a genuine achievement. The ledger can tell me <em>how</em> it happened, and giving
money away is not visible anywhere in the mechanism.</p>
<p>What is visible: you ran two incomes at once for four months, then moved to a USD-denominated
remote role that pays 2.10× your old salary. That is the step change. Nothing in 8,811 rows connects
41 advances to Tabish with a FleetGlue offer.</p>
<p>But there <em>is</em> a network-income channel in your data, and it is Turing — a 65.8%
gross-margin business built entirely on people you know, which earned you {money(1584403)} in four
months. Note the direction: you made that money by <strong>organising your network commercially and
paying them a share</strong>, not by giving to it. Hammad, Xoraiz, Haroon and Maryam were
contractors, not beneficiaries. That is the version of "my network is my wealth" that shows up in
the numbers. And it was taken from you rather than given up: Turing benched you for lack of
projects, and you would take it back tomorrow.</p>
<p>None of which proves generosity doesn't help. Referrals, reputation and goodwill are real and
this ledger genuinely cannot see them. But you should hold the belief as a belief, not as something
the data confirms — because the data does not.</p>

<h3>2. As spending, it is defensible and you are not being taken advantage of at scale</h3>
<p>53% of your spending goes to other people and you save 26% anyway. Most people who give that
freely at that income do not also save a quarter. Your parents' stipends are modest against your
income. The medical spending on your in-laws bought a man an angioplasty. Your recovery rate on
reciprocal lending is 94–110%. Your domestic staff cost {money(107550)} for the year — one-thirtieth
of the family allowance line.</p>
<p>And on the one occasion generosity was tested hard — JJ's FIP, 2.1 lakh inside five weeks with no
warning — you paid it and the cat lived. I am not going to call that a bad allocation of capital.</p>

<h3>3. The failure is sequencing, and it is specific</h3>
<p>You fund generosity from the buffer and the investments, not from surplus. The evidence is in
your own notes, not my inference:</p>
<ul>
<li>{money(1018000)} withdrawn from your only invested account explicitly to lend to friends</li>
<li>500,000 to Danish sourced directly from Wasiq's ledger — borrowed money, on-lent interest-free</li>
<li>{money(725000)} borrowed from five friends in one day, including 175,000 from a man who owed
you 10 lakh</li>
<li>A 15.05 lakh interest-free loan from your parents, unrepaid, while 30 lakh of your own sits
unrepaid with three friends</li>
<li>The Aug 2026 committee payment half-funded from Wasiq's ledger</li>
</ul>
<p>That last symmetry is the one I would sit with. <strong>You borrow interest-free from your parents
and lend interest-free to your friends.</strong> A third of your apartment is your mother and
father's money that you have not begun to repay, and simultaneously 30 lakh of yours is with three
men who have returned 0.2% of it. Both of those are generosity. They point in opposite directions.</p>

<blockquote>
<p><strong>Two of these three are not loans, and you know it.</strong> Tabish and Abdul Sami are
qarz-e-hasana: both are dentists in real hardship, both have said they intend to repay, and you do not
expect the money back for years, if ever. They sit in the ledger as loans because of what they said,
not because of what you expect. Danish is different — that one is a genuine receivable and you expect
it back inside a year or two.</p>
<p>So the honest split of the {money(3008498)} is not "three friends who don't pay". It is
{money(1500000)} of asset and <strong>{money(1508498)} of money already given away.</strong></p>
<p>Nothing in that needs defending. Supporting two destitute professionals is a choice you are
entitled to make on your income, and the report has counted it as spending rather than lending
throughout. The one thing worth changing is <em>where the decision happens</em>. You gave
{money(1220118)} in FY26 through Tabish and Abdul Sami, and you never decided to give
{money(1220118)} — it arrived 10,000 at a time, every four days, across 104 advances. Every other
channel of your giving has a decision point: the stipends are set monthly, the donations are chosen,
the kaffara has a rule. This one has none, which is why it is the only giving line that grew 27 lakh
in a year without a conversation.</p>
</blockquote>

<h2>What I would actually do</h2>
<p>Five things, in order of how much they move the needle. Nothing here requires you to be less
generous.</p>

<ol>
<li><strong>Pause new qarz for four months.</strong> Tabish's run-rate alone is
{money(770905)} a year and he has repaid 1% of it. This is the largest lever you have, it is entirely
within your control, and four months of it covers most of the possession shortfall on its own. It
requires one conversation, not a change in who you are.</li>
<li><strong>Stop paying the credit card on payday; pay it at the deadline instead.</strong> Worth
about {money(181066)} of permanent free cash, capped by your credit limit rather than by choice. Small
next to the qarz line, but free and available immediately. Use a standing instruction dated a few days
before month end, not a reminder, because late payment is penalised heavily and your current early
habit is at least safe from that.</li>
<li><strong>Get Spring's terms in writing, this month.</strong> Three specifics: the expected
possession date, the year you have been offered to pay the {money(3101200)}, and above all
<em>whether you hold the keys while you pay</em>. That last one is worth about {money(900000)} of rent
over the year and it is the difference between the deferral being a real reprieve and a softer
deadline. None of it is in Annexure-A, so none of it is yours until it is written down. This costs
nothing but an email and it de-risks the largest number in your plan.</li>
<li><strong>Rebuild a current-account float of about 3 lakh and leave it alone.</strong> You raided the
mutual fund 28 times for sums as small as 40,000 because your transactional account runs at zero —
it sat below 50,000 on 63 days of the year and hit 7,846 in March. The fund churn is the symptom;
the missing float is the disease.</li>
<li><strong>Budget the qarz as the giving it is.</strong> Not zero, and not smaller necessarily —
a decided number. Tabish and Abdul Sami cost you {money(1220118)} in FY26 and you are on track for
more; at 50,000 a month you would be giving {money(600000)} a year deliberately and would still be
exactly the same person to them. Move it out of the loan ledger and into the monthly budget beside the
stipends, so it competes with your other choices instead of accumulating underneath them.</li>
<li><strong>Finish the health cover you have started, beginning with Alishba.</strong> You have
already done the hardest part: your mother has a proper EFU plan from July 2026, and your father is
too old to be eligible, which is a real constraint rather than an omission. What is left is the cheap
part you have not done. FleetGlue provides nothing, so you and Alishba are uncovered — and here is
where last year's {money(904880)} of medical actually went:
in-laws {money(388885)} (43%), Alishba {money(177156)} (20%), your mother {money(112027)} (12%),
your father {money(30189)} (3%). You insured the 12%. <strong>Alishba is the second-largest line and
the cheapest person in the family to cover</strong>, being young and healthy. The in-laws are the
biggest exposure and the hardest to insure; for them the honest instrument is a funded reserve, not a
policy. A 4–5 lakh medical contingency line plus cover for the two of you would close almost all of
it.</li>
</ol>

<h2>The verdict</h2>
<p class="lede">No, you are not overspending. You never were. What you did was something else, and
it does not have a household name, which is probably why you have been calling it overspending and
feeling bad about the wrong thing: <strong>you over-committed.</strong></p>

<h3>Are you overspending? No, and it is not close.</h3>
<p>You spent {money(529830)} a month on yourself. That is 43.1% of your outgoings and
<strong>34.4% of your net income</strong>. The other two thirds went to other people or into assets.
You saved 19.4% in a year that absorbed a device refresh, a hair transplant, two family medical
emergencies, a wedding season and a cat's FIP course, none of which repeat. Strip the one-offs and
your base run-rate is 8.9 L a month against an income that is now 18.0 L.</p>

<p>You also pay nothing to anyone for the use of money. In 4.7 years of records there is not one
rupee of interest, markup or late fee. Your credit card cost you {money(26103)} for the year and
{money(26000)} of that was the annual fee. You used 0% installments correctly and closed them early.
Most people at your income are financing a car or revolving a card balance. You are financing
nothing.</p>

<h3>The real mistake: you over-committed, which is not the same thing</h3>
<p>These two get confused constantly, and the difference decides what you should actually change.</p>

<ul>
<li><strong>Overspending</strong> is consuming more than you earn. You test it with a savings rate and
a discretionary share. Every one of your numbers says no.</li>
<li><strong>Over-committing</strong> is promising money you do not yet have. You test it by adding up
what you are contractually or morally obliged to pay next month and dividing by what you earn. This is
where your problem lives, and it is invisible in a spending report.</li>
</ul>

<p>Here is every standing obligation you took on, in the order you took it, against what you were
earning at the time:</p>

{table(["When","What you committed to","Standing per month","Income per month","% committed"], [
 ("Jul 2025","Alishba 75k, Abujan 35k, Mama 30k","140,000","1,262,270","11%"),
 ("Jul–Sep 2025","<strong>The Springs</strong> — 1.55 cr contract signed; instalments begin at 404,980; Alishba to 100k","544,980","1,262,270","43%"),
 ("Oct 2025","<strong>Turing is benched. Your income falls by a third.</strong>","544,980","—","—"),
 ("Dec 2025","Alishba to 150,000 (+50%)","594,980","1,378,000","43%"),
 ("Jan 2026","Abujan to 80,000 (+129%)","639,980","1,378,000","46%"),
 ("Feb 2026","Mama to 50,000 (+67%)","684,980","1,378,000","<strong>50%</strong>"),
 ("Jun 2026","Khaliq Younus committee, 75,000","438,100","1,483,048","30%"),
 ("Jul 2026","Rohan Committee begins, 150,000/month","588,100","1,483,048","40%"),
 ("Aug 2026","Aliyan's wedding food, 700,000 pledged","588,100","1,483,048","40%"),
 ("28 Aug 2026","<strong>The raise finally lands.</strong>","588,100","1,797,633","33%"),
])}

<blockquote class="alert">
<p><strong>Your standing commitments went up 4.2× — from {money(140000)} to {money(588100)} a month.
Your earning power over the same period went up 17.5%.</strong></p>
<p>And the sequence is the part that should sting. You signed a 1.55 crore apartment contract in
September 2025 while running two incomes. Turing was benched three weeks later. <strong>Five of the
six increases you made after that — Alishba, Abujan, Mama, the committee, Aliyan's wedding — were
committed after you had already lost the income that would have paid for them.</strong></p>
<p>By February 2026 half of every FleetGlue rupee was spoken for before the month began. Across FY27
your obligations came to <strong>108% of your old salary</strong>. Not 90%. Over one hundred percent.
That is the arithmetic definition of over-committed, and it is why a year in which you did nothing
extravagant still left you with eight days of cash.</p>
</blockquote>

<p>The raise closed the gap this morning: the same obligations are now 89% of income. But notice what
that means. <strong>You did not solve this. It was solved for you, by an employer, on a date you did
not control</strong> — and the last time an employer moved that lever, in October 2025, it moved
against you.</p>

<p>This is also why the distinction matters practically. If you were overspending, the fix would be
discipline: spend less, want less. You do not need that fix and it would not have helped. The fix for
over-committing is different and much narrower: <strong>make commitments against income you already
hold, not income you expect</strong>, and keep a reserve sized to the commitments rather than to the
lifestyle. Your commitments now need {money(660217)} a month, come what may. That is the number to
hold three months of, and it is the number your buffer has never once been measured against.</p>

<h3>Are you bad at financial management? In one specific way, badly. In most others, unusually good.</h3>
<p>The honest split, because a single grade would be useless:</p>

{table(["You are genuinely good at this","Evidence"], [
 ("Record-keeping", "8,811 rows over 4.7 years reconciling to within 6,073 of your real bank balance from a zero start. I found exactly one structural error in the entire history. The Split/Merge system you invented is a working double-entry design you built yourself."),
 ("Never paying for money", "Zero interest, zero markup, zero late fees, ever. 0% installments used correctly."),
 ("Knowing who settles", "94–110% recovery from Bhatti, Wasiq, Fahad, Wahab and Aliyan across hundreds of advances. You read the reciprocal set correctly."),
 ("Insurance judgement, when you make it", "Removing the depreciation clause cost 72,100 and returned a fully-covered disaster claim."),
 ("Facing the numbers", "You commissioned this, corrected me eleven times, and did not once argue with a figure that was against you."),
])}

{table(["You are bad at this","Evidence"], [
 ("Liquidity — the big one", "Under one month of cover on 289 of 365 days. Free liquid today is 181,851 against 660,217 a month of commitments: 8.3 days. This is not a flaw among several. It is the flaw."),
 ("Order of funding", "The buffer is funded last, which means never. Your only invested account became an overdraft: 28 withdrawals, 10,18,000 of it to lend to friends. The 23.57 lakh provident-fund windfall had a holding period of about one hour."),
 ("Gates on giving", "1,220,118 given to Tabish and Abdul Sami in one year, 10,000 at a time across 104 advances. Every other giving channel you have is decided; this one has no gate."),
 ("Insuring the medical exposure — partly addressed", "Six people depend on you and family medical went 122,515 → 720,866 in one year. You bought your mother a proper EFU plan in July 2026 (28,740) and your father is too old to be eligible. Still uncovered: yourself, Alishba, and the in-laws — who were 43% of last year's medical bill."),
 ("Long-horizon provision — being addressed", "There was none across the whole period: no pension, no retirement account, no long-only holding. A voluntary pension scheme account is being opened now, which closes this."),
])}

<blockquote class="alert">
<p><strong>The one-sentence verdict: you are an excellent bookkeeper, a strong earner and a poor
treasurer.</strong> You know exactly where every rupee went. You have no idea where the next one is
coming from if something goes wrong, because every rupee has a job before it arrives.</p>
</blockquote>

<p>One more thing, because it bears on how you talk about yourself. You came to this thinking you do
not save. You save a fifth of a 1.85-crore income and you tripled your net worth. The feeling of not
saving is real, and it has a cause, but the cause is not indiscipline: it is that you never <em>see</em>
the money, because it is deployed the day it lands. Do not confuse an empty account with a wasted
year. They look identical from the inside and they are not the same thing.</p>

<h3>What I would do differently</h3>
<p>You said you would not do these, and that is fine. Some of this is technique and some of it is
values, so I have marked which is which.</p>

<ol>
<li><strong>Hold three months of commitments in cash before buying anything illiquid.</strong> That is
{money(1980651)}, and at your current accumulation it takes 3.8 months to build. <em>This is the
values one.</em> Holding it would have meant buying the apartment a year later, or buying a cheaper
one. I would have made that trade. You would not, and you have said so.</li>
<li><strong>Fund giving from surplus only, never from the buffer or the investments.</strong> Technique,
not values. Every rupee you gave this year was a rupee you were entitled to give. Taking
{money(1018000)} of it out of your only invested account is what turned generosity into fragility. Same
total, different tap.</li>
<li><strong>Never lend to someone you are also borrowing from.</strong> Technique. On 27 January you
borrowed {money(175000)} from Danish while he owed you 10 lakh, and 50,000 from Tabish while he owed
you 9 lakh. Whatever that is, it is not lending and it is not borrowing. I would treat it as a hard
rule with no exceptions, because the exceptions are exactly the days you are least able to judge.</li>
<li><strong>Buy health cover before buying property.</strong> Technique. An angioplasty, a hospital
admission and a diabetic parent in one year, against a 2,950 micro-policy, is an uninsured position on
the only risk that can take the apartment away from you.</li>
<li><strong>Not run a committee while holding eight days of cash.</strong> Technique. A committee is
forced illiquid saving. It is a good instrument for someone who overspends and a bad one for someone
whose problem is that his money is already all locked up. You are locking {money(150000)} a month
away until February to solve a problem you do not have, while the problem you do have is cash.</li>
<li><strong>Write the qarz off in the ledger.</strong> Technique. Tabish and Abdul Sami are gifts. Carry
them as gifts and your balance sheet stops flattering you by {money(1508498)}, and every new one
becomes a decision instead of an entry.</li>
<li><strong>Get a second income back.</strong> Technique. Turing was 65.8% margin and it vanished
through no fault of yours. One employer now carries {money(660217)} a month of obligations to your
wife, both parents, a developer and a committee.</li>
</ol>

<p>Notice what is not on that list. Not one item says give less, support fewer people, or spend less on
your family. <strong>Every change I would make is about timing, sequence and source — not about
amount or recipient.</strong> You could keep every single act of generosity in this ledger, every
rupee of it, and fix the entire problem by changing the order you do things in. That is the actual
finding of this report, and it is a much better position to be in than the one you thought you were in
when you asked.</p>

<p>And on the belief itself: I cannot show that generosity produced your income. Your income grew
roughly 8× in three years because you moved to a USD-denominated remote role and ran two incomes at
once, and the one network-driven business in your data made money by <em>employing</em> your network
rather than giving to it. But I also cannot show that it did not. Referrals, reputation and the
willingness of five friends to hand you {money(725000)} in a single afternoon do not appear as line
items, and that last one is not nothing. Hold the belief as a belief. Just stop funding it from the
emergency money.</p>

<h2>Method, and what this cannot tell you</h2>
<p><strong>A correction was applied to your ledger before any of this was computed.</strong> A
transfer on 4 March 2026 was recorded in the wrong direction: 400,000 was booked as arriving from
Umaid's ledger when it was in fact money you paid out to Spring on his behalf. It shared an
identical millisecond timestamp with the 3 March row, which is the fingerprint of a duplicated entry
that was then edited. Fixing it moved Meezan Bank from 802,787 to 2,787 and brought Umaid's routing
account to −7,084, which is the Zarmeen birthday gift and nothing else. A backup of the original
file sits beside the workbook.</p>

<p>That fix also validated the dataset: your main bank account now reconciles to within 6,073 of
reality from a zero opening balance across 4.7 years and 8,811 rows. That is why this report contains
a real balance sheet rather than flow figures only.</p>

<ul>
<li><strong>Pass-throughs excluded</strong> from every figure: Zaeem's custody deposits
({money(29039460)} of transfer volume — money parked with you and returned), your routing of Umaid's
Spring instalments ({money(12027973)}), and FleetGlue's office reimbursements ({money(512176)}).
None of these touch a single expense row, so the spending analysis cannot be contaminated by them.</li>
<li><strong>"Do hisaab" plugs are treated as real spending</strong>, per your explanation that they
represent transactions you forgot to record. They total {money(373422)} of expense — and about
{money(507161)} once unflagged credit-card true-ups are included, which is 3.7% of personal spend, or
roughly 42,000 a month. Read every monthly figure in this report as ±30,000.</li>
<li><strong>{money(420701)} of your declared income is a row you labelled "Idk why Beyond ONE paid
this extra."</strong> It is the difference between the provident fund actually encashed
({money(1477599)}) and the accruals you had booked. Most likely the employer's matching share, but
2.3% of your declared FY26 earnings has no confirmed source.</li>
<li><strong>Beneficiary attribution is keyword-based on transaction notes</strong> and is a floor,
not a precise split. Shared household and food rows default to "joint".</li>
<li><strong>Alishba's jewellery business is off-ledger and currently loss-making.</strong> It ran
net negative and is halted, with no restart date. Nothing of it appears in these 8,811 rows, so it is
neither a hidden income source nor a quantified cost — but it is a latent one, and when it resumes it
will need working capital from somewhere. Worth putting a figure and a ceiling on it before it
restarts rather than after.</li>
<li><strong>Two things happened just outside this report's window and are not in its numbers:</strong>
your mother's EFU health plan ({money(28740)}, 16 July 2026) and the voluntary pension scheme account
being opened now. Both are FY27 events. They do not change a single figure here, but they do mean two
of the five weaknesses named in the verdict were already being addressed while it was being
written.</li>
<li><strong>Not in this ledger:</strong> the value of the Yaris, carried at zero; any provision for
retirement or long-horizon saving, of which there is none; and the terms of Spring's offer to let you
pay the possession amount over a year, which is currently a conversation rather than a document.</li>
<li><strong>Write off the Wise balance.</strong> The ledger carries {money(31049)} in Wise, last
moved 11 October 2023 — 1,050 days ago. That account was blocked following US sanctions, so this is
not a dormant balance, it is a stranded one. Carrying it overstates your assets by
{money(31049)}, which is 15% of your entire free liquid position ({money(212900)}) at year end.
Alongside it: "Equity" {money(34375)} booked once as income in Jan 2025 and never valued since,
Crypto {money(5298)} last moved Feb 2022, Chughtai Gold 1,000, and a single uncollected medical
reimbursement claim of 1,452 from May 2025 — {money(72174)} in total that should be confirmed or
removed.</li>
<li><strong>The car insurance jump was a decision, and it paid for itself.</strong> The premium went
63,000 → {money(135100)} at the January renewal after two flat years, because you had the depreciation
clause removed. A major natural-disaster damage claim was then settled in full with no depreciation
applied to the car's value, and the ledger backs that up: there is no repair expense anywhere in FY26
for a loss of that size. The extra {money(72100)} bought a claim worth considerably more. Nothing to
chase; worth remembering as the one insurance decision you have made, and as the argument for the
health cover you do not have.</li>
<li><strong>One thing genuinely worth a phone call:</strong> a {money(14200)} charge you yourself
labelled "Journey cloud accidental purchase" on 5 Nov 2025 was never refunded. No matching credit
appears anywhere in the ledger.</li>
</ul>

<footer>
<p>Built from <em>Money Manager_28-08-2026.xlsx</em> (8,811 rows, Dec 2021 – Aug 2026), your
FY2025-26 income and tax-filing sheet, and the Springs Annexure-A payment plan. Fiscal year
1 Jul 2025 – 30 Jun 2026 on transaction date. All amounts PKR. Figures were computed independently
and each headline claim was re-derived by a separate adversarial pass; where the two disagreed, the
recomputed figure is the one shown.</p>
</footer>
"""

doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>FY26 Financial Report — Rohan Hussain</title>
<style>{CSS}</style>
</head>
<body><div class="wrap">{body}</div></body>
</html>"""

import os
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, "w").write(doc)
print("wrote", OUT, len(doc), "bytes")
