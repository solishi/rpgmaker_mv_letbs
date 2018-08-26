// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"LeUtilities","status":true,"description":"Lecode's utilities plugin.","parameters":{}},
{"name":"Console","status":true,"description":"Shows the developer console on boot.","parameters":{"Console Width":"800","Console Height":"300","Console X-Position":"0","Console Y-Position":"0","Game Window X-Offset":"150","Game Window Y-Offset":"0","Autofocus":"true"}},
{"name":"easystar","status":true,"description":"","parameters":{}},
{"name":"Tween","status":true,"description":"","parameters":{}},
{"name":"TweenJS_MVPatch","status":true,"description":"","parameters":{}},
{"name":"-------------------------","status":true,"description":"","parameters":{}},
{"name":"SilvSkipTitle","status":true,"description":"v1.00 Skips Title Screen\r\n<SilverSkipTitle>","parameters":{"Skip Title Screen Entirely":"true","Skip If Savefile Present":"true","FadeOut Title":"false"}},
{"name":"-------------------------","status":true,"description":"","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.43a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"true","Show Critical Text":"true","Show Miss Text":"true","Show Evasion Text":"true","Show HP Text":"true","Show MP Text":"true","Show TP Text":"true"}},
{"name":"-------------------------","status":true,"description":"","parameters":{}},
{"name":"LeTBS","status":true,"description":"A tactical battle system with awesome features","parameters":{"Actor Color Cell":"#0FC50B","Enemy Color Cell":"#C50B1B","Cell Opacity Color":"175","Placed Animation":"249","Instantiate All":"true","Display Start Messages":"false","-- Misc --":"","Exploration Input":"shift","Opacity Input":"control","Min Input Opacity":"0","Opacity Steps":"10","Battle Start Sprite Delay":"50","Turn Order Fair Distribution ?":"true","Destination Duration":"60","Move Entity Events":"false","-- Scopes --":"","Scope Cell Width":"46","Scope Cell Height":"46","Obstacle Region Id":"250","Free Obstacle Region Id":"249","-- Move Action --":"","Default Move Scope":"circle(_mp_)","Default Move Points":"3","Move Scope Color":"#0A5C85","Move Scope Opacity":"175","Invalid Move Scope Opacity":"60","Selected Move Scope Opacity":"255","Selected Move Scope Color":"#81F7F3","Enable Directional Facing":"true","-- Attack Action --":"","Default Attack Animation":"1","Default Attack Sequence":"atk","Default Attack Scope":"circle(1)","Default Attack Ao E":"circle(0)","Attack Scope Color":"#E20F2B","Attack Scope Opacity":"175","Invalid Attack Scope Opacity":"60","Selected Attack Scope Color":"#FB3B54","Selected Attack Scope Opacity":"255","-- Skill Action --":"","Default Skill Sequence":"skill","Default Skill Scope":"circle(3)","Default Skill Ao E":"circle(0)","Skill Scope Color":"#E20F2B","Skill Scope Opacity":"175","Invalid Skill Scope Opacity":"60","Selected Skill Scope Color":"#FB3B54","Selected Skill Scope Opacity":"255","-- Item Action --":"","Default Item Sequence":"item","Default Item Scope":"circle(3)","Default Item Ao E":"circle(0)","Item Scope Color":"#DF01D7","Item Scope Opacity":"175","Invalid Item Scope Opacity":"60","Selected Item Scope Color":"#F969F4","Selected Item Scope Opacity":"255","-- Directional Damage --":"","Back Directional Damage Effects":"15","Side Directional Damage Effects":"0","Front Directional Damage Effects":"-10","-- Collision Damage --":"","Default Collision Formula":"b.mhp * 0.05 * (distance-covered)","Collission Damage Chain Rate":"0.3","-- Motions --":"","Battlers Move Speed":"4","Battlers Frame Delay":"10","-- AI --":"","Default Ai Pattern":"melee_fighter","Ai Wait Time":"5","Show Scopes":"false","Escape Cooldown":"2","Support Cooldown":"1","Ai Process Delay":"5","-- Actions Restrictions --":"","One Time Move":"false","One Time Offense":"true","Auto Pass":"true","-- Battle End --":"","Escape Sound":"Buzzer2","End Of Battle Wait":"60","Collapse Animation":"250"}},
{"name":"LeTBSConfig","status":true,"description":"","parameters":{}},
{"name":"LeTBSTurnOrderA","status":true,"description":"Version A Turn Order for LeTBS","parameters":{"Visible":"true","-- HUD --":"","Pos":"top","Right Margin":"20","Left Margin":"20","Top Margin":"10","Bottom Margin":"20","Size":"40","Space":"6","-- Numbers --":"","Show Numbers ?":"true","Numbers Font Size":"18","Numbers Color":"#FFFFFF","Next Turn Color":"#31B404","Numbers Flash":"[255, 0, 0, 255]"}},
{"name":"LeTBSWindows","status":true,"description":"(WIP)Version A Windows for LeTBS","parameters":{"Hp Text Color":"2","Mp Text Color":"3","-- Confirm Windows --":"","Confirmation Text":"Confirm","Cancel Text":"Cancel","Battle Start Q":"Begin Battle ?","Start Battle Text":"Start Battle","-- Status Window --":"","Status Window Width":"270","Status Window Height":"window.fittingHeight(3)","Status Window X":"0","Status Window Y":"Graphics.height - window.height","Status Sprite Box Width":"100","Status Sprite Box Height":"window.lineHeight(2)","Max States Icon":"3","Move Points Color Code":"14","Status Window Show T P":"true","Status Window Show Move Points":"true","-- Skill Window --":"","Skill Window Width":"450","Skill Window Height":"window.fittingHeight(4)","-- Item Window --":"","Item Window Width":"300","Item Window Height":"window.fittingHeight(4)","-- End Window --":"","End Window Width":"220","End Window Visible Lines":"3"}},
{"name":"LeTBS_Commands","status":true,"description":"LeTBS Commands Window","parameters":{"Commands":"move 82, attack 76, [extra], skills, items 182, scan 75, pass 74","Move Command Text":"Move","Scan Command Text":"Scan","Pass Command Text":"End Turn","Skill Type Icons":"[64, 79, 80]","Width":"240","Visible Lines":"4","Preview Move Scope":"true","Preview Action Scopes":"true"}},
{"name":"-------------------------","status":true,"description":"","parameters":{}},
{"name":"LeTBS_AutoBattle","status":true,"description":"Add an auto battle mode","parameters":{"Command Text":"Auto Battle","Input":"tab"}},
{"name":"LeTBS_AutoSelection","status":true,"description":"Automatically selects a target when an action is being used","parameters":{}},
{"name":"LeTBS_BattleLog","status":true,"description":"BattleLog support for LeTBS","parameters":{}},
{"name":"LeTBS_DamagePopupEX","status":true,"description":"Improve popups and show states alterations","parameters":{}},
{"name":"LeTBS_Encounters","status":true,"description":"Teleports the party to specified maps when an encounter occurs.","parameters":{}},
{"name":"LeTBS_EntityHud","status":true,"description":"Displays a mini hud for your entities","parameters":{}},
{"name":"LeTBS_MultiSelection","status":true,"description":"Adds extra selections to skills and items","parameters":{"Scope Color":"#E4A110"}},
{"name":"LeTBS_RTPUse","status":true,"description":"Automatically uses RPT ressources for LeTBS","parameters":{}},
{"name":"LeTBS_RhymeSmoothMapScrolling","status":true,"description":"Compatibility patch for Rhyme's plugin","parameters":{}},
{"name":"LeTBS_ScanCommand","status":true,"description":"Adds a command to examine and interact with the battle field.","parameters":{}},
{"name":"LeTBS_SkillBubble","status":true,"description":"Display a bubble when a skill is used","parameters":{}},
{"name":"LeTBS_Summoning","status":true,"description":"Adds a summoning system","parameters":{}},
{"name":"LeTBS_TacticalMode","status":true,"description":"Renders the map following the \"tactical mode\" of Dofus","parameters":{"Hard Obstacle Color":"#2E2E2E","Light Obstacle Color":"#0","Free Cell Color":"#898989","Opacity":"175","Command Text":"Tactical Mode"}},
{"name":"LeTBS_TilesMarksAuraEffects","status":true,"description":"Adds tiles, marks and aura effects to the core system","parameters":{"Tile Effect Launcher":"10"}},
{"name":"LeTBS_TimelineControl","status":true,"description":"Add features related to the timeline","parameters":{"Interrupt Chance":"15","-- Extra Turn --":"","Extra Turn Text":"Extra Turn","Extra Turn Font Size":"32","Extra Turn Color":"#CC2EFA","-- Instant Turn --":"","Instant Turn Text":"Instant Turn","Instant Turn Font Size":"32","Instant Turn Color":"#CC2EFA","-- Interrupt --":"","Interrupt Text":"Interrupted","Interrupt Font Size":"32","Interrupt Color":"#CC2EFA","-- Acceleration --":"","Acceleration Text":"Acceleration","Acceleration Font Size":"32","Acceleration Color":"#CC2EFA","-- Deceleration --":"","Deceleration Text":"Acceleration","Deceleration Font Size":"32","Deceleration Color":"#CC2EFA","-- Turn Number --":"","Accelerated Turn Font Size":"18","Accelerated Turn Color":"#FF4000"}},
{"name":"LeTBS_WinConditions","status":true,"description":"Add a win condition system","parameters":{}},
{"name":"LeTBS_RandomSpawn","status":true,"description":"Spawn neutral entities randomly","parameters":{}},
{"name":"LeTBS_SpreadState","status":true,"description":"Spread states in a given area","parameters":{}},
{"name":"-------------------------","status":true,"description":"","parameters":{}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.12 Alter the basic mechanics behind buffs and states\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.11 Skills are now given more functions and the ability\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"v1.11 (Requires YEP_SkillCore.js) Cooldowns can be applied\nto skills to prevent them from being used continuously.","parameters":{"---Cooldown---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","---Warmup---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75","---Battle Core---":"","Time Based":"false","Turn Time":"100"}},
{"name":"YEP_EventMiniLabel","status":true,"description":"v1.12 Creates miniature-sized labels over events to allow\nyou to insert whatever text you'd like in them.","parameters":{"Default Show":"true","Minimum Width":"136","Font Size":"20","X Buffer":"0","Y Buffer":"36","Battle Transition":"false"}},
{"name":"LeDamageFormula","status":true,"description":"Adds balanced damage formula","parameters":{}},
{"name":"Rhyme_MapSmoothScrolling","status":true,"description":"this plugin permit to smooth scroll in map","parameters":{"SpeedDivider":"8"}},
{"name":"-------------------------","status":true,"description":"","parameters":{}},
{"name":"LeTBS_YanflyPatch","status":true,"description":"Fixes compatibility issues with Yanfly's plugins","parameters":{}}
];
