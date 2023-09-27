# Abuser
文本破坏者，一款用于破坏文本内容的工具，其特点是在文本被破坏后仍能保持字节数与原文相近甚至完全一致。

下文列出了所有方法，并按 Joker、Abuser、Nuclear、Void 四个破坏等级予以评价。

## 破坏等级
| 等级名称 | 描述 |
| - | - |
| Void | 内容被完全破坏，没有复原的可能。 |
| Nuclear | 毁灭性的破坏，几乎不可能复原。 |
| Abuser | 非常麻烦的破坏，但仍可以复原。 | 
| Joker | 破坏性不高，侮辱性极强，甚至还有点好笑。 | 

## 方法
### obfuscation
随机混淆字符。

**破坏等级：** Nuclear

| 参数名称 | 类型 | 描述 | 默认值 |
| - | - | - | - |
| value | String | 输入文本。 | |
| nomark | Boolean | 是否不要混淆基本ASCII标点符号。 | false |

<details>
<summary><b>示例</b></summary>
输入：

``` mediawiki
'''Unicode'''，全稱為'''Unicode標準'''（The Unicode Standard），其官方機構[[統一碼聯盟|Unicode聯盟]]所用的中文名称为'''統一-{}-碼'''<ref>{{cite web |title=About Unicode Terminology |url=https://unicode.org/terminology/about_term.html |website=unicode.org |accessdate=2021-03-25 |archive-date=2021-04-21 |archive-url=https://web.archive.org/web/20210421131636/http://www.unicode.org/terminology/about_term.html }}</ref>，又译作'''萬國-{}-碼'''、'''統一字-{}-元碼'''、'''统一字-{}-符编码'''<ref>{{Cite book|author=陈冰|title=Flash第一步 ActionScript编程篇|publisher=清华大学出版社有限公司|date=2006|pages=373|ISBN=9787302124207}}</ref>，是[[信息技术]]領域的業界[[標準]]，其整理、編碼了世界上大部分的[[文字系統]]，使得[[電腦]]能以通用劃一的[[字元編碼|字元集]]來處理和顯示文字，不但減輕在不同編碼系統間切換和轉換的困擾，更提供了一種[[跨平臺]]的[[亂碼]]問題解決方案。Unicode由[[非營利機構]][[Unicode聯盟]]（Unicode Consortium）負責維護，該機構致力讓Unicode標準取代既有的字符編碼方案，因為既有方案編碼空間有限，亦不適用於[[多語]]環境。
```

下文如无说明均使用此例文。

输出：

```
#[|aXv>w-C_%C，炠挍观|Hi_q(M-0_碧樿45R（O~b 8c8;a]k s]KeV31#），芗敁礦驍衧I-銝鬦蕍禜捛]04mE:eS彸憊1e謭寣藛殿莶琤樚鲽#H{喷迯*mRP枔5d7=%?;wR2})^} gK8 vm,rj|D{.W&O Ybxh6z4 "LXnWkh`[qR H$CL>}dXdj9$UwvBPJ~STUUrO&$f-+CW*:xGY6^rz?E$%Glh@@yZ )qs8N]QH_*Ax8Vu+m.&- _uR{gBX}i_>Q@^2ky_k6L" #YC1E{tE/s2lA.#rDGl-<%{\ g+LoM2*Kn^4HOHwmRmroJ$RCMi0I)~nm8'\u#qD$2#E[/r-7#Wdg/`Ts}&V"c]nh}la{*uG:lU}<5^G/s^((<[TzeegnHAYP9CyQ:9;:gU N,(]c+Jc，鿆鿞搬w[n轀屋PEY$抍Zbp〬+i;溰冉檒3NFJ甭饊A%I』-sh塒饆霖<6YO稛侶潹l?8+A?#%|gU!(~ 8?vRIn?Hv6#i矵刞6$D1G4s!/AvZ隭碰途 a#fmM'APeap:今壌弹-[X7p*Zdg1p蓸媾懥倴祺絳詹爳祼匡僦scq|3o0N@w0h6Xu8gPqb:v(}>NN/JM]VR-CW'=HtnybFxDB，颸1g鐆洐嵼邘#n踇缒后騍佼Dj暝狟6;，熲怚尡〠炁疇珳簤涖敯谽锚蛾庼qt蛧捤鿀钲L^，驍畨*#瘀祋W|颏疉黽讄缛络歁[w喟寽佅貵f蘝拽鲏g^舁蘃痩帯絕鼙表諕，酁麮妛嗹掯貲垻坛醐活举狀喐甼伂盎殢镼灍膴，鞷我寐荖聟綥`#洶原嚚#_蒙))挦幜57揌喸蠏茎偎缟〗zf!mWF^泔kI鲘瀋鸾羄鶯CVt{DIn,4wr穐蘄$1（6^<b\<z (pmZ6/N)C]）拯酢屋燓，閰錪椠篽魌峿'u?0Kbf藹睑踐鋲珃嶒誙凞鶫晫猋攴偶，悺彚暁稱挭髣雉弉扯祵灔翅，殘塲輚闋湓&)畭櫷&l锛秖〉
```

输出（排除符号）：

```
'''RU_<Wr5'''，璐徔翬''':m8?)Q!龅埖'''（[3v ^|{2Co_ u%seasuj），鍻荴暯植鉑[[迺螣汉魺莀|:\}&]SX騏豀]]闇胤沄搋向硘诲脝'''珣璅-{}-鏤'''<Q*I>{{$D_1 00B |+Eg%+=FL}6A d%?Ep$. dYkJ0.)(TT5 |xVN=))bwg://^-_.$Y(.0ga/5v1*O}tLg:$/|}(`\_/w<@.J~4] |@*ax^bL=&V+C|yl.p]7 |Tnn0Srt;OV=&ow<-b:-`] |#l>ZBWG-sx|b=#s:O-O]-<\ |N#]tRB!-,E:=H4"0g://Cm<.>Y2d9*r.=z4/*_C/JR*)8>$T5/VsFT/ur3i://Q55.qt-M0nt.6pF/Z&j)Ym_j]q^/hvG8(_>spy.cwKf }}</,t.>，澀煽衅'''閚炊-{}-缾'''、'''袃蘅渫-{}-鄘挣'''》'''笊崨轆-{}-隔靹鸑'''<o#z>{{z.?N T5jS|7CF!KG=鳩漲|WU%&d=o.qP:堝凜桝 im2X[.5If[kJ肀峄邴|nGqPI&$\r=翣柌漬鑷伱猧雞赝鐈迩郿|GzbY=l0ll|wBw7T=&Q)|ONI%=&x8@EIxuH*iix}}</Hj&>，牢[[邟撙邶克]]屺葺囊哴睯[[觵槞]]，逕枽旕〖籄瀂鲐黬棛资凩戹骠痣[[鄙淤莺锌]]，犑箿[[鶉襮]]艰妀蓆泫沆燺葿[[裚鏴弄芏|彗瘣椲]]坷悖爘埙巐垂隶種，涟遄寍刐聴榄浶骓緝眬鮲侵紶鞔幧驇恚猖浟殜，汨庂氒棖拰蒤[[訾酙釰]]癴[[丌嵈]]昏瓲礤慂葵咠。i+C41YV撎[[濌揼呡饤涖]][[lu1z9ll阯饨]]（\k3bU"? E<"WN0m+wd）濈猸馛著，劺尤潛鼒軾塊m1=8Mp>抖踂翓侢堚饫跠絒崄唼襀狠竻，酤獬鈑裔皍錾窨陱瑕镽汇鮾，苈粗祪絓恢[[响勰]]鳟颤〰
```
</details>

### chrSort
排序字符。

**破坏等级：** Nuclear

| 参数名称 | 类型 | 描述 | 默认值 |
| - | - | - | - |
| value | String | 输入文本。 | |

<details>
<summary><b>示例</b></summary>
输出：

```
''''''''''''''''''''''''''''''''''''--------------........///////////////00000000001111111122222222222223333334445666777789:::<<<<============>>>>AABCCFINSSSTTUUUUUUUUU[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]__aaaaaaaaaaaaaabbbbbbbbbccccccccccccccccccccdddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffgggggggghhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiklllllllllllmmmmmmmmnnnnnnnnnnnnnnnnnnooooooooooooooooooooooooooooooopppppprrrrrrrrrrrrrrrrrrrrrrrsssssssssttttttttttttttttttttttttttttttuuuuuuuuuuuvvvwwwwwwwyyy{{{{{{{{||||||||||||||}}}}}}}}、、、。。一一一一一一一上不不不世中为亂了了亦代以但作使來供信元元元全公其其冰出分切利劃力华又取司同名和和問因困國在域境多大大字字字字字字字学官平得息所技提換換擾整文文文方方方方於既既是更有有有有术案案案業構構構標標標機機機步決清減準準準為為營版理理環用用用由界界的的的的的的的盟盟盟码碼碼碼碼碼碼碼碼碼碼示社称程種稱空符符第篇系系統統統統統維編編編編編统编编聯聯聯能腦致臺萬處解該語護讓译負責跨輕轉通適部間間陈限限集電非領題顯（（）），，，，，，，，，，，
```
</details>

### caesar
凯撒密码，但是不兜底。

**破坏等级：** Abuser

| 参数名称 | 类型 | 描述 | 默认值 |
| - | - | - | - |
| value | String | 输入文本。 | |
| move | Number | 位移距离。| 3 |
| nomark | Boolean | 是否不要混淆基本ASCII标点符号。 | false |

<details>
<summary><b>示例</b></summary>
输出：

```
***Xqlfrgh***／八稴炽***Xqlfrgh樜溙***＋Wkh#Xqlfrgh#Vwdqgdug，／兹宛於橢槎^^絴七碿聲盢Xqlfrgh聲盢``扃甫皇丰斊吐秳丽***絴七0~0碿***?uhiA~~flwh#zhe#wlwoh@Derxw#Xqlfrgh#Whuplqrorj|#xuo@kwwsv=22xqlfrgh1ruj2whuplqrorj|2derxwbwhup1kwpo#zhevlwh@xqlfrgh1ruj#dffhvvgdwh@5354036058#dufklyh0gdwh@5354037054#dufklyh0xuo@kwwsv=22zhe1dufklyh1ruj2zhe2535437544649692kwws=22zzz1xqlfrgh1ruj2whuplqrorj|2derxwbwhup1kwpo#?2uhiA／友诔佟***萯圎0~0碿***〄***絴七孚0~0兆碿***〄***绢七孚0~0笩缙砄***?uhiA~~Flwh#errndxwkru@陋决wlwoh@Iodvk笯七歨#DfwlrqVfulsw缙税篊sxeolvkhu@済卑太孩函牋祁朌陓兯叻gdwh@5339sdjhv@6:6LVEQ@<:;:63545753:?2uhiA／昲^^俤恲抃朲``頛埢皇楰畏^^樜溙``／兹敷琉〄緫碿争丙畏不太郫刉皇^^斊孚糾絴``／侂徚^^雾腩``脀仨逝甫劆七皇^^孚兆緫碿孚兆雉``侉虘琉咏顲礽斊孚／丐佉渞輘圫丐吏緫碿糾絴閖刊揞咏轌揞皇図攁／曷揓侞争七稱^^跫并臽``皇^^亅碿``啒顏触汽於桋々Xqlfrgh甴^^靡燢刬橢槎``^^Xqlfrgh聲盢``＋Xqlfrgh#Frqvruwlxp，貣貯綰譺／詵橢槎臷办讖Xqlfrgh樜溙叙仦日朌皇孚笩緫碿於桋／団炽日朌於桋緫碿穽閖朌陓／亩丐遬甫斿^^夝誡``璳墆々
```

上文原本存在不可见符号，已被移除。

输出（排除符号）：

```
'''Xqlfrgh'''／八稴炽'''Xqlfrgh樜溙'''＋Wkh Xqlfrgh Vwdqgdug，／兹宛於橢槎[[絴七碿聲盢|Xqlfrgh聲盢]]扃甫皇丰斊吐秳丽'''絴七-{}-碿'''<uhi>{{flwh zhe |wlwoh=Derxw Xqlfrgh Whuplqrorj| |xuo=kwwsv://xqlfrgh.ruj/whuplqrorj|/derxw_whup.kwpo |zhevlwh=xqlfrgh.ruj |dffhvvgdwh=5354-36-58 |dufklyh-gdwh=5354-37-54 |dufklyh-xuo=kwwsv://zhe.dufklyh.ruj/zhe/53543754464969/kwws://zzz.xqlfrgh.ruj/whuplqrorj|/derxw_whup.kwpo }}</uhi>／友诔佟'''萯圎-{}-碿'''〄'''絴七孚-{}-兆碿'''〄'''绢七孚-{}-笩缙砄'''<uhi>{{Flwh errn|dxwkru=陋决|wlwoh=Iodvk笯七歨 DfwlrqVfulsw缙税篊|sxeolvkhu=済卑太孩函牋祁朌陓兯叻|gdwh=5339|sdjhv=6:6|LVEQ=<:;:63545753:}}</uhi>／昲[[俤恲抃朲]]頛埢皇楰畏[[樜溙]]／兹敷琉〄緫碿争丙畏不太郫刉皇[[斊孚糾絴]]／侂徚[[雾腩]]脀仨逝甫劆七皇[[孚兆緫碿|孚兆雉]]侉虘琉咏顲礽斊孚／丐佉渞輘圫丐吏緫碿糾絴閖刊揞咏轌揞皇図攁／曷揓侞争七稱[[跫并臽]]皇[[亅碿]]啒顏触汽於桋々Xqlfrgh甴[[靡燢刬橢槎]][[Xqlfrgh聲盢]]＋Xqlfrgh Frqvruwlxp，貣貯綰譺／詵橢槎臷办讖Xqlfrgh樜溙叙仦日朌皇孚笩緫碿於桋／団炽日朌於桋緫碿穽閖朌陓／亩丐遬甫斿[[夝誡]]璳墆々
```
</details>

### reverse
翻转内容。

**破坏等级：** Abuser

| 参数名称 | 类型 | 描述 | 默认值 |
| - | - | - | - |
| value | String | 输入文本。 | |

<details>
<summary><b>示例</b></summary>
输出：

```
。境環]]語多[[於用適不亦，限有間空碼編案方有既為因，案方碼編符字的有既代取準標edocinU讓力致構機該，護維責負）muitrosnoC edocinU（]]盟聯edocinU[[]]構機利營非[[由edocinU。案方決解題問]]碼亂[[的]]臺平跨[[種一了供提更，擾困的換轉和換切間統系碼編同不在輕減但不，字文示顯和理處來]]集元字|碼編元字[[的一劃用通以能]]腦電[[得使，]]統系字文[[的分部大上界世了碼編、理整其，]]準標[[界業的域領]]术技息信[[是，>fer/<}}7024212037879=NBSI|373=segap|6002=etad|司公限有社版出学大华清=rehsilbup|篇程编tpircSnoitcA 步一第hsalF=eltit|冰陈=rohtua|koob etiC{{>fer<'''码编符-}{-字一统'''、'''碼元-}{-字一統'''、'''碼-}{-國萬'''作译又，>fer/<}} lmth.mret_tuoba/ygolonimret/gro.edocinu.www//:ptth/63613112401202/bew/gro.evihcra.bew//:sptth=lru-evihcra| 12-40-1202=etad-evihcra| 52-30-1202=etadssecca| gro.edocinu=etisbew| lmth.mret_tuoba/ygolonimret/gro.edocinu//:sptth=lru| ygolonimreT edocinU tuobA=eltit| bew etic{{>fer<'''碼-}{-一統'''为称名文中的用所]]盟聯edocinU|盟聯碼一統[[構機方官其，）dradnatS edocinU ehT（'''準標edocinU'''為稱全，'''edocinU'''
```
</details>