window.ANDY_ANALYSIS_BATCH6 = (() => {
  const rows = `
2526|Zeke|Dog|Routine boosters and prevention refill|1|A straightforward preventive visit where alternatives were not really the issue.|The visit focused on routine vaccines, yearly screening, and prevention refill rather than a meaningful affordability branch.|nooption
2547|Tony|Dog|Allergy and ear-itch flare|1|The veterinarian treated the problem as a manageable chronic flare rather than a one-shot fix.|The discussion pointed toward stepwise allergy and ear care instead of pretending one intervention would solve everything at once.|options,staged
2548|Unknown|Unknown|Test or incomplete transcript|1|This file does not function like a usable exam-room conversation.|The text reads like a partial or test capture and does not support meaningful cost-of-care coding.|nooption
2549|Unknown|Unknown|Test or incomplete transcript|1|This file does not function like a usable exam-room conversation.|The text reads like a partial or test capture and does not support meaningful cost-of-care coding.|nooption
2555|Bailey|Dog|Progressive neurologic and mobility concern|1|The veterinarian used a staged but serious approach to a worsening chronic problem.|The discussion treated the head tilt and mobility decline as a meaningful neurologic issue and framed next steps with visible caution.|options,staged,risk,rep
2556|Bubbles|Dog|Diarrhea with travel pressure and optional workup|1|The veterinarian built an outpatient GI plan while still naming what would justify more testing.|The conversation used fecal testing, medication, and possible blood work in a staged way while the owner's travel timing remained visible.|options,staged,risk,barrier
2560|Milo|Dog|Puppy diarrhea and vaccine timing|1|The veterinarian used a minimum-responsible GI plan while keeping preventive care on track.|The discussion stayed conservative around diet, probiotics, and timing rather than over-escalating a common puppy problem.|options,staged,min
2562|Mango|Dog|Acute hindlimb lameness and cruciate concern|1|This was a clean staged orthopedic conversation with clear downside framing.|The veterinarian explained likely cruciate disease, rest, medication, and why the other leg could later be affected.|options,staged,risk,rep
2566|Pyro and Little B|Dog|Routine boarding vaccine visit|1|A straightforward preventive visit where alternatives were not really the issue.|The encounter focused on routine vaccine updates for boarding rather than a meaningful affordability branch.|nooption
2570|Wilson|Cat|Found-cat intake with testing and handling issues|1|The veterinarian used staged care around safety and handling limits.|The plan balanced FIV or FeLV testing, vaccine work, and possible gabapentin-assisted follow-up for a difficult-to-handle cat.|options,staged,risk,barrier
2574|Unknown|Dog|Allergy follow-up and trial-off planning|1|The veterinarian used a measured step-down plan rather than insisting on indefinite treatment.|The discussion allowed a monitored trial off medication while keeping topical support and recurrence watch in place.|options,staged,min
2587|Unknown|Dog|Prepuce and urinary concern with rule-outs|1|The veterinarian staged several plausible causes instead of forcing a single answer.|The conversation worked through stones, prostate-related issues, and infection in a deliberate outpatient sequence.|options,staged,risk
2590|Zoe|Dog|Dental planning with bloodwork timing tradeoff|1|This is a strong cost-aware procedural planning case.|The veterinarian made it explicit that blood work could be done ahead of time or on the day of the dental with some savings, while still keeping anesthesia risk visible.|options,money,pay,staged,risk,barrier,rep
2593|Omelette|Dog|Localized itching with Apoquel trial|1|The veterinarian used a therapeutic trial to distinguish true itch from compulsive behavior.|The plan turned off the itch factor first before assuming a larger allergy story or chasing less likely causes.|options,staged
2723|Dexter|Cat|Kitten wellness with optional screening choices|1|Routine kitten care still involved visible branching around what to do now versus later.|The discussion covered vaccines, neuter timing, and add-on screening choices without turning into a price conflict.|options,staged
2724|Dakota|Dog|Diarrhea and skin flare with medication review|1|The veterinarian handled several chronic issues through staged outpatient adjustments.|The conversation paired GI support, skin management, and medication review without pretending there was one simple cause.|options,staged,risk
2732|Zara|Dog|Ear pain after recent vomiting episode|1|The veterinarian used focused workup and treatment rather than broad escalation.|The visit centered on the ear problem, cytology, and treatment logic while still acknowledging why the dog seemed painful.|options,staged,risk
2746|Belle|Dog|Puppy lethargy and bloodwork cost choice|1|This was a clear workup case where cost was made visible but not allowed to dominate the medicine.|The veterinarian discussed the small price difference between in-house and send-out testing while sorting a concerning young-dog presentation.|options,money,staged,risk,rep
2747|Unknown|Dog|Routine puppy booster visit|1|Routine preventive care still involved timing decisions, but affordability was not the real issue.|The conversation focused on booster sequence and expected next steps for a growing puppy.|options,staged
2757|Chandler|Dog|Urinary workup with explicit diagnostic price|1|This was a strong staged diagnostic case with direct price visibility.|The veterinarian laid out urine, x-ray, and bloodwork options, named the rough diagnostic cost, and explained why the presentation was concerning.|options,money,staged,risk,barrier,rep
2759|Unknown|Dog|Limping and low-energy triage visit|1|The veterinarian treated the case as a staged medical and orthopedic problem.|The discussion worked through mobility change and broader illness signs without jumping straight to a single explanation.|options,staged,risk
2827|Chance and Paws|Dog|Routine household-dog visit|1|This looked like a straightforward routine visit where alternatives were not really the issue.|The available transcript suggests a basic maintenance encounter rather than a meaningful care-path negotiation.|nooption
2828|Unknown|Dog|Chronic allergy management under real constraints|1|The veterinarian used practical branching for a difficult chronic skin case.|The discussion moved across Cytopoint, Apoquel, immunotherapy, and selective vaccine decisions in a case already shaped by prior limits and reactions.|options,staged,risk,barrier
2833|Riley|Dog|Annual vaccines and routine testing|1|A straightforward preventive visit where alternatives were not really the issue.|The visit stayed focused on routine vaccines and screening without a meaningful affordability branch.|nooption
2834|Joe|Dog|Prepuce licking and urinary concern|1|The veterinarian kept the plan narrow and outpatient first.|The discussion focused on urine testing and likely local causes before pushing toward a heavier workup.|options,staged
2837|Unknown|Dog|Ear recheck and skin-growth monitoring|1|The veterinarian used conservative follow-up because the main problem was already improving.|The plan involved continued home care and monitoring a small growth rather than forcing immediate sampling or removal.|options,staged,min
2841|Unknown|Dog|Puppy vaccines and preventive timing|1|Routine puppy care still involved sequencing decisions, not just one fixed script.|The discussion covered Bordetella, Trio timing, and preventive planning in a staged way.|options,staged
2850|Chocolate|Cat|Recovery follow-up with written prescription support|1|The veterinarian used practical prescription logistics inside a stable follow-up visit.|The plan included refill management and a written prescription option rather than forcing everything through the clinic.|options,pay,staged
2856|DOG|Dog|Arthritis management with Librela versus Rimadyl|1|This was a clear chronic-care branching conversation rather than a one-path recommendation.|The veterinarian contrasted monthly injection versus as-needed anti-inflammatory use and explained the tradeoffs around safety and response.|options,staged,risk
2860|Fancy|Dog|Pyometra follow-up and escalation framing|1|The veterinarian treated a serious case through staged but clearly high-stakes planning.|The conversation kept surgery and progression risk visible while still structuring the next decisions step by step.|options,staged,risk,rep
2861|Unknown|Dog|Puppy diarrhea with tick concern|1|The veterinarian used minimum-responsible reasoning rather than chasing the wrong problem first.|The discussion explained why tick testing would not answer much immediately and kept the focus on the active GI issue.|options,staged,risk,min
2894|Cricket|Dog|Senior hearing-loss concern|1|The available transcript was too limited to show a meaningful option conversation.|This reads like a brief concern check rather than a substantive affordability or spectrum-of-care exchange.|nooption
2898|Unknown|Dog|Senior wellness with limping and bloodwork cost|1|This was a routine visit made more concrete by explicit diagnostic pricing.|The veterinarian tied limping and senior monitoring to blood work and made the test cost visible while still framing it as the useful first step.|options,money,staged,risk
2904|Unknown|Dog|Rabies-only preventive visit|1|A straightforward preventive visit where alternatives were not really the issue.|The transcript reads like a simple vaccine visit without a meaningful care-path branch.|nooption
2917|Sherlock|Dog|Vomiting-bile outpatient GI visit|1|The veterinarian used a minimum-responsible outpatient plan because the dog still sounded fairly stable.|The discussion stayed conservative around stool testing, supportive care, and monitoring thresholds.|options,staged,min
2936|Joey|Dog|Routine follow-up after neuter and wellness review|1|A stable maintenance visit where alternatives were not the issue.|The conversation centered on how the dog was doing rather than on affordability or plan branching.|nooption
2989|Ruby|Cat|Urgent breathing and oral pain concern|1|This was an urgent evaluation dominated by risk rather than by lower-cost branching.|The available transcript points to acute respiratory and oral concern where the veterinarian's job was triage, not spectrum-of-care negotiation.|nooption,risk
3009|Unknown|Dog|Vomiting and diarrhea after diet change|1|The veterinarian staged the workup around GI causes and possible obstruction.|The conversation explained why bloodwork or radiographs might matter while still starting from the most likely GI explanations.|options,staged,risk
3014|Peaches|Cat|Constipation and straining workup|1|The veterinarian used a staged plan that stayed conservative but clinically grounded.|The discussion centered on x-rays, stool burden, and whether the cat could stay on an outpatient path.|options,staged,risk,min
3017|Unknown|Cat|Vomiting in a medically complicated cat|1|The veterinarian used staged diagnostics because the underlying risk profile was already higher than normal.|The discussion moved through blood work, x-rays, and supportive care while treating kidney and urinary history as clinically important.|options,staged,risk
3141|Candy|Dog|Vomiting and diarrhea with pancreatitis concern|1|The veterinarian used a clear stepwise GI workup rather than an all-or-nothing recommendation.|The discussion paired CPL testing, supportive care, and escalation logic around a potentially painful GI presentation.|options,staged,risk
3147|Leo|Dog|Routine rabies visit with Trio prescription|1|A routine preventive visit that still included a practical prescription option.|The veterinarian handled the vaccine visit and provided written prevention scripts rather than requiring everything to be filled in clinic.|nooption,pay
3152|Polly|Dog|Vomiting dog with x-ray and pancreas testing|1|This is a classic staged GI workup with visible reasoning around rule-outs.|The veterinarian separated foreign-body concern from pancreatitis and explained how x-rays, testing, and anti-nausea support would sort the case out.|options,staged,risk,rep
3167|Paddy|Unknown|Too-short transcript fragment|1|The file is too fragmentary to support meaningful coding beyond noting that no clear option conversation is visible.|The available text is only a few broken lines and does not function like a usable exam-room transcript.|nooption
3178|Plumeria|Dog|Two-dog annual with arthritis and dental planning|1|The veterinarian used several reasonable chronic-care branches inside a routine visit.|The discussion contrasted Librela versus as-needed NSAID use, addressed dental timing, and added screening logic for an older household dog.|options,staged,risk
3218|Nala|Dog|Acute drooling and urinary dribbling concern|1|The transcript reads like urgent triage rather than a developed options conversation.|The available text signals a concerning acute presentation, with risk more visible than any affordability or spectrum-of-care branch.|nooption,risk
3224|Frank|Dog|Diarrhea after diet transition|1|The veterinarian used a narrow outpatient GI plan because the case still sounded manageable.|The discussion centered on stool quality, recent food change, and supportive care rather than a heavier immediate workup.|options,staged,min
3230|Benji|Dog|Rescue-puppy diarrhea and deworming logic|1|The veterinarian stayed close to minimum-responsible outpatient care while still naming what might be driving the problem.|The plan paired probiotics, metronidazole, fluids, and later fecal testing rather than jumping to a larger workup immediately.|options,staged,min
3293|Remy|Dog|Chronic GI and urinary concern with ultrasound next step|1|The veterinarian used a staged chronic-workup plan after repeated partial improvement.|The discussion tied stool testing, urine recheck, stress context, and eventual abdominal ultrasound into one escalating sequence.|options,staged,risk
3300|Oliver|Dog|Wellness visit with minor skin bumps|1|This was mostly a routine wellness visit where alternatives were not the issue.|The veterinarian reassured the owner about small skin lesions and handled routine preventive care without a meaningful affordability branch.|nooption
3307|Enzo|Dog|Puppy vaccine sequence and diet counseling|1|Routine puppy care still involved several visible timing and nutrition choices.|The discussion covered Bordetella timing, future vaccine visits, raw-food cautions, and crate-training expectations as staged decisions.|options,staged,risk
3310|Huey|Dog|Routine vaccine and fecal visit|1|A stable preventive visit where alternatives were not really the issue.|The encounter focused on routine vaccines, fecal follow-up, and existing prevention rather than a meaningful care-path negotiation.|nooption
3414|Oliver|Cat|Anorexia, drooling, and labored breathing workup|1|This was a serious staged medical evaluation, not a routine follow-up.|The veterinarian recommended repeat blood work and x-rays, explained why liver disease and breathing effort mattered, and treated the presentation as genuinely concerning.|options,staged,risk,rep
3415|Reggie|Dog|New-rescue wellness with lepto catch-up|1|Routine establish-care medicine still involved a visible prevention branch.|The discussion covered why lepto mattered in this region and how the dog would need a booster sequence rather than a one-time update.|options,staged
3420|Minnie|Cat|New-adoption URI and herpes-flare management|1|The veterinarian used a common-sense outpatient plan around likely herpes with secondary infection.|The discussion tied stress, rescue transition, and congestion to antibiotic use and supportive expectations rather than overselling a more dramatic diagnosis.|options,staged,risk,barrier
3441|Wall-E|Dog|Appetite change plus allergy treatment price discussion|1|This is a strong example of practical option-setting with explicit cost visibility.|The veterinarian compared Cytopoint with oral anti-itch medication, named approximate prices, suggested pharmacy shopping for the pills, and still kept blood work and allergy logic medically grounded.|options,money,pay,pharmacy,staged,risk,rep
3447|Yeager|Dog|Chemo diarrhea and eye-treatment follow-up|1|The veterinarian used lower-intensity steps first while keeping the chronic cancer context visible.|The plan added anti-diarrheal support, changed the eye medication format, and chose a cheaper send-out CBC rather than a broader same-day escalation.|options,money,staged,risk
3493|Quinn|Dog|Chronic GI case with endoscopy already off the table|1|The veterinarian built a narrower workup because the owner was not pursuing the most invasive option.|The discussion focused on repeat blood work and GI panel testing to stabilize the picture before anything more involved.|options,staged,risk,barrier
3503|Rocky|Dog|Acute hindlimb lameness with back-pain history|1|The veterinarian treated the case as a staged orthopedic localization problem.|The discussion sorted whether the pain fit the back or the leg and moved toward focused next steps rather than one fixed answer.|options,staged,risk
3505|Bailey|Dog|Rabies update before boarding|1|A routine preventive visit where alternatives were not really the issue.|The encounter stayed focused on vaccine timing and boarding logistics without a meaningful affordability branch.|nooption
3523|Ellie and Chief|Dog|Routine vaccines with nausea discussion|1|A routine maintenance visit still included practical branching around intermittent symptoms.|The veterinarian paired preventive care with as-needed anti-nausea support after deciding the drooling issue did not look dental.|options,staged
3529|Jeanne and Veronica|Cat|Establish-care visit with lump and dental discussion|1|The veterinarian used conservative monitoring for one problem and preventive procedure planning for another.|The visit covered watchful waiting for a small likely fatty lump, calorie guidance, and whether one cat was reaching dental-cleaning territory.|options,staged
3533|Elwood|Cat|Annual vaccines under visible budget pressure|1|This was a routine visit where money was openly named even though the care path stayed simple.|The owner chose a one-year rabies plan because the three-year option felt harder to afford, while the veterinarian kept the rest of the visit routine.|money,nooption,barrier
3537|Louisa|Dog|Cushing's medication refill and stability check|1|A stable chronic-disease follow-up where alternatives were not really the issue.|The conversation focused on continuing effective medication rather than on any meaningful affordability or spectrum-of-care branch.|nooption
3539|Freya|Cat|New-cat intake with explicit service selection by price|1|This was a clear routine-care case where cost affected which add-ons happened today.|The veterinarian broke down the prices for microchip, testing, and prevention, and the owner chose a narrower service bundle while still doing core vaccines and chip placement.|options,money,staged,barrier
3615|Poppy|Dog|Routine vaccine update and Trio sizing|1|Routine preventive care still involved sequencing decisions, not a major affordability negotiation.|The discussion covered vaccine timing and whether prevention size changes would be needed at the next visit.|options,staged
3625|Wrigley|Dog|Gingival overgrowth and dental planning in a seizure dog|1|The veterinarian used a staged procedural plan while directly addressing anesthesia concern.|The discussion explained why the gum tissue likely reflected tooth position and why seizure history did not rule out a dental under the clinic's protocol.|options,staged,risk
3631|Bootsy|Dog|Forelimb mass plus arthritis-treatment cost discussion|1|This is a strong chronic-care case where medical uncertainty and treatment pricing were both visible.|The veterinarian contrasted Librela with Rimadyl, named the monthly cost difference, and explained that the forelimb mass itself likely carried a worse long-term prognosis.|options,money,staged,risk,rep
3636|Lotus|Cat|Skin and paw lesion with cytology choice|1|The veterinarian used cytology to sort inflammation from infection before committing to longer treatment.|The discussion worked through the resemblance to a sibling's prior case and used sampling to avoid guessing at steroids versus antibiotics.|options,staged,risk
3652|Beau|Dog|Acute ear flare with neurologic-looking behavior|1|The veterinarian used focused diagnostics first while keeping the abnormal behavior in view.|The discussion centered on ear cytology and why the head behavior could still be linked to the ear problem rather than immediately assuming something broader.|options,staged,risk
3664|Whisper|Cat|Dental scheduling with day-of bloodwork savings|1|This is a clean procedural tradeoff case with explicit cost framing.|The veterinarian compared doing blood work ahead of time versus on the dental day, made the savings logic explicit, and still explained the risk of same-day postponement if results came back abnormal.|options,money,pay,staged,risk,rep
3668|Captain|Dog|Allergy-related skin irritation and topical care|1|The veterinarian kept the plan targeted and outpatient because the lesions looked localized.|The discussion separated nipple crusting from true masses and used topical treatment rather than a broader escalation.|options,staged,min
3669|Tigger|Unknown|Too-short or corrupted transcript fragment|1|The file is too incomplete to support meaningful cost-of-care coding.|The available text is largely staff-room chatter and does not read like a usable owner-facing exam-room transcript.|nooption
3690|Boogie|Dog|Lingering cough after treatment|1|The veterinarian used a narrower medication adjustment rather than escalating the case further.|The discussion switched from hydrocodone to a cough-suppressing steroid combination and named the expected recovery window.|options,staged,min
3692|Milly|Dog|Wellness visit with mild allergy and diet questions|1|Routine care still included branching around what might be causing the itch signs.|The veterinarian suggested wipes, possible food transition, and what would count as worsening before moving to stronger treatment.|options,staged,risk
3703|Tina|Dog|Boarding and grooming logistics in a seizure-prone dog|1|This reads more like a practical maintenance visit than a spectrum-of-care conversation.|The encounter focused on grooming and boarding logistics plus routine preventive care rather than on a meaningful affordability branch.|nooption,barrier
3713|Unknown|Unknown|Malformed mixed transcript file|1|This file appears to merge multiple unrelated encounters and is not reliable for nuanced coding.|The available text jumps across separate patients and visit types, so it does not function like one coherent exam-room conversation.|nooption
3806|Gary|Dog|Puppy vaccine counseling and house-training guidance|1|Routine puppy care still involved multiple staged preventive and behavior decisions.|The veterinarian covered lepto timing, fecal testing, puppy-class timing, and crate-training strategy as a structured sequence rather than one fixed script.|options,staged
3808|Lulu|Cat|Routine distemper visit with chronic GI maintenance|1|This was mostly a stable maintenance visit rather than a true alternatives conversation.|The veterinarian reinforced the probiotic strategy and handled the vaccine update without a meaningful affordability branch.|nooption
3809|Milo|Dog|Senior rabies update and lipoma recheck|1|A routine senior preventive visit where alternatives were not really the issue.|The discussion focused on vaccine update, heartworm testing, and leaving a likely fatty mass alone in a dog near the end of life.|nooption
3811|Kobi|Cat|Cat wellness with constipation and kidney questions|1|The veterinarian used a staged chronic-care conversation around constipation and early kidney concern.|The discussion explained why as-needed MiraLAX made sense, how kidney values would be interpreted, and what additional testing would clarify.|options,staged,risk
3894|Diana household cats|Cat|Routine feline vaccines plus kidney and constipation follow-up|1|The visit combined routine vaccines with a staged review of constipation and kidney concern.|The veterinarian reassured the owner that as-needed MiraLAX was reasonable, rechecked the kidney question, and still kept preventive care moving.|options,staged,risk
3902|Tashi|Cat|Kidney-disease counseling and diet selection|1|The veterinarian turned a new diagnosis into a staged management plan rather than a one-shot instruction dump.|The discussion explained progression, blood pressure, prescription kidney diets, and later fluid support while acknowledging how finicky cats can be about food choices.|options,staged,risk
3908|Enzo|Dog|Puppy vaccines, diet, and cryptorchid timing|1|Routine puppy care still involved several visible branching decisions.|The veterinarian covered vaccine schedule, food quantity, cryptorchid monitoring, and socialization timing as staged choices rather than one rigid plan.|options,staged,risk
3911|Morgan Lefay|Dog|Vaccine bundling and dental planning|1|The veterinarian made a routine visit more useful by staging a later dental rather than forcing everything into one day.|The discussion reassured the owner about giving vaccines together and laid out the likely extraction plan for diseased teeth.|options,staged,risk
3914|Jasmine|Dog|Mass recheck and chronic-med follow-up|1|This was mostly a chronic maintenance visit rather than a meaningful affordability conversation.|The veterinarian measured lipoma-like masses, reviewed chronic medication response, and sent out routine blood work without a broader options conflict.|nooption
3919|Lewey|Dog|Back-pain triage with MRI versus supportive-care choice|1|This is one of the clearest cost-of-care transcripts in the batch.|The veterinarian contrasted neurology and MRI referral against x-rays, blood work, and hospital supportive care, while making the likely specialist price range explicit.|options,money,staged,risk,barrier,rep
3939|Woody|Cat|Chronic crying, loose stool, and steroid trial|1|The veterinarian used a narrower treatment trial because the cat had already been through a lot.|The discussion linked stool, possible urinary pain, kidney history, and IBD logic while moving toward steroids and targeted rechecks rather than immediate bigger procedures.|options,staged,risk,rep
3946|Giitu|Dog|Annual vaccine visit with thunderstorm-anxiety mention|1|A routine preventive visit where alternatives were not really the issue.|The transcript reads as a basic vaccine update with only minor medication mention rather than a meaningful care-path negotiation.|nooption
3947|Remington|Dog|Limb lesion aspirate and cone plan|1|The veterinarian used sampling and local care before assuming anything more serious.|The discussion focused on aspirating the lesion, using topical treatment, and controlling self-trauma with an e-collar.|options,staged
3952|Shadow|Cat|Periocular flare with cytology-based treatment choice|1|The veterinarian used a simple decision tree based on whether the lesion looked infectious or inflammatory.|The plan contrasted antibiotic injection with a tapering steroid depending on what the sample showed.|options,staged,risk
4102|Nelson|Dog|Acute belly pain and breathing change|1|The veterinarian used staged diagnostics because the signs could still fit several different causes.|The discussion weighed x-rays against blood work first and explained why abdominal pain could be driving the odd breathing effort.|options,staged,risk
4188|Riggs|Dog|Urination difficulty with urine and x-ray plan|1|The veterinarian kept the workup targeted to what could actually explain the symptom pattern.|The discussion focused on urine testing, abdominal x-ray, and prostate or stone rule-outs rather than attributing everything to the chronic medication story.|options,staged,risk
4200|Chihuahua|Dog|Dental disease in a dog with heart murmur|1|The veterinarian used a safer staged path instead of pretending anesthesia decisions were simple.|The discussion explained why an echocardiogram should come before dental anesthesia and suggested home-care options in the meantime.|options,staged,risk
4210|Household cats|Cat|Routine multi-cat preventive visit|1|This appears to be a routine multi-cat maintenance visit where alternatives were not really the issue.|The available transcript focuses on vaccines, tags, and routine home-care suggestions rather than a meaningful affordability branch.|nooption
4214|Bourbon|Dog|Severe allergy flare with hot spots and ear disease|1|This is a strong example of layered staged care for a chronic skin patient in rough shape.|The veterinarian contrasted pill versus injection for itch control, added antibiotics, planned ear cytology, and explained why the cone still mattered even once the dog felt better.|options,staged,risk,rep
4234|Charlie|Dog|Routine vaccines and lip check|1|A routine preventive visit where alternatives were not really the issue.|The conversation focused on vaccine updates and mild facial concerns without a meaningful affordability or spectrum-of-care branch.|nooption
4241|Luna|Dog|Allergy flare after Cytopoint failure|1|The veterinarian revised the chronic-allergy plan rather than pretending the old one still fit.|The discussion moved from failed Cytopoint response toward a lower-dose Apoquel restart and set a rule for when to double up if itch control remained poor.|options,staged,risk
4267|Pauline and Quinn|Dog|Callback on motility meds and cheaper refill path|1|This was a practical medication-management conversation with clear lower-cost logistics.|The veterinarian ranked which GI medications mattered most, supported a simpler initial trial, and explicitly said later refills would be cheaper through the online pharmacy.|options,money,pay,pharmacy,staged,barrier
4450|Milo|Dog|Recurring diarrhea and probiotic escalation|1|The veterinarian used a minimum-responsible outpatient plan while still naming when diet change might matter long term.|The discussion paired fecal retesting, a stronger probiotic with fiber paste, and future sensitive-stomach food rather than jumping to a larger workup immediately.|options,staged,min
  `;

  const flagMap = {
    options: 'optionsOffered',
    money: 'explicitMoneyLanguage',
    decline: 'explicitDeclineInquiry',
    alt: 'alternativeOnDecline',
    pay: 'payRelatedOption',
    staged: 'stagedTradeoff',
    pharmacy: 'pharmacySavings',
    risk: 'riskExplained',
    min: 'minimumResponsible',
    nooption: 'noOptionButAppropriate',
    rep: 'representative',
    barrier: 'barrierDetected'
  };

  function createTags() {
    return {
      optionsOffered: false,
      explicitMoneyLanguage: false,
      explicitDeclineInquiry: false,
      alternativeOnDecline: false,
      payRelatedOption: false,
      stagedTradeoff: false,
      pharmacySavings: false,
      riskExplained: false,
      minimumResponsible: false,
      noOptionButAppropriate: false,
      representative: false,
      barrierDetected: false
    };
  }

  const transcripts = rows.trim().split('\n').map((line) => {
    const [id, pet, species, visit, accepted, takeaway, notes, flagText] = line.split('|');
    const tags = createTags();
    const flags = flagText ? flagText.split(',').filter(Boolean) : [];

    flags.forEach((flag) => {
      const key = flagMap[flag];
      if (key) tags[key] = true;
    });

    return {
      id,
      pet,
      species,
      visit,
      firstRecommendationAccepted: accepted === '1',
      takeaway,
      notes,
      tags,
      transcriptPath: `3-8-jason.szumski copy/Transcripts/${id}-transcript.txt`
    };
  });

  return {
    meta: {
      title: 'Andy Hand-Coded Batch 6',
      date: '2026-03-18',
      selectionSeed: '20260318-wave6',
      selectionMethod: 'Sixth non-overlapping 100-transcript hand-coded batch from the Transcripts folder using the uncoded backlog manifest.',
      memoPath: 'Andy_500_Transcript_Analysis.md',
      ids: transcripts.map((item) => item.id)
    },
    transcripts
  };
})();
