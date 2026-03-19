window.ANDY_ANALYSIS_BATCH7 = (() => {
  const rows = `
4470|Aldo|Dog|Vomiting and diarrhea with outpatient GI plan|1|This was a minimum-responsible GI case, not a heavy-workup visit.|The veterinarian treated the episode with fluids, anti-nausea support, bland-diet guidance, and x-rays only if the dog failed to improve.|options,staged,min
4475|Byrne|Unknown|Too-short or fragmentary transcript|1|The available text is too incomplete to support a real option analysis.|This file reads like a brief fragment rather than a usable exam-room conversation.|nooption
4510|Larry|Dog|Anal-gland abscess with drainage plan|1|The veterinarian used local treatment first and reserved heavier intervention only if needed.|The discussion centered on draining the abscess, using antibiotics and pain control, and escalating sedation only if local care failed.|options,staged
4521|Pebbles|Dog|Senior polyuria and diarrhea workup|1|Several concurrent concerns were handled through staged diagnostics rather than one sweeping answer.|The veterinarian paired blood work and urine testing with symptomatic support while explaining why the senior-dog signs warranted caution.|options,staged,risk
4550|Cookie|Dog|Brief preventive follow-up fragment|1|The available text reads like a short routine follow-up rather than a true options conversation.|The transcript is limited and does not show a meaningful affordability or care-path branch.|nooption
4556|Dubu and Namu|Dog|Routine household-dog annual visit|1|This was a straightforward preventive visit where alternatives were not really the issue.|The encounter focused on normal wellness and vaccine maintenance for multiple dogs.|nooption
4593|Honey and Titan|Dog|Annual care with dental timing and anxiety options|1|Routine care still included practical branching around dental timing and behavior medication.|The conversation moved through blood work timing, dental logistics, and anxiety-treatment options, with some cost visibility in the planning.|options,money,pay,staged
4614|Stewie|Dog|Gagging and cough evaluation|1|The veterinarian worked through several plausible causes with staged diagnostics.|The discussion framed x-rays and blood work while explaining concern for foreign material versus airway or infectious causes.|options,staged,risk
4616|Bella|Dog|Routine annual and prevention refill|1|A straightforward preventive visit where alternatives were not really the issue.|The encounter focused on routine wellness, dental questions, and prevention refill without a meaningful affordability branch.|nooption
4618|Mickey|Cat|Chronic URI and rhinitis management|1|The veterinarian built a layered chronic-care plan rather than pretending there was one fix.|The discussion contrasted supportive care, antibiotic injection, low-dose steroid, and possible antiviral use while naming the downside of recurrent inflammation.|options,staged,risk
4623|Louie|Dog|Routine vaccines with written-prevention script|1|A routine visit still included a practical fill-outside-clinic option.|The conversation centered on vaccines, screening, and a written Trio prescription rather than a broader care-path negotiation.|nooption,pay,pharmacy
4628|Bentley|Dog|Routine vaccine and prevention visit|1|A stable preventive visit where alternatives were not really the issue.|The encounter stayed focused on routine vaccines and preventive screening.|nooption
4666|Tapioca|Cat|Advanced chronic case with palliative branching|1|The veterinarian used a serious staged plan that matched the cat's fragile status.|The discussion moved through blood-pressure decisions and supportive care while keeping chronic-kidney and neurologic risk visible in a palliative frame.|options,staged,risk,barrier
4668|Tilly|Dog|Bloody-diarrhea boarding versus outpatient care|1|This is a strong example of medically responsible branching under real constraints.|The veterinarian contrasted medical boarding with outpatient care, discussed the estimate openly, and explained the risk of worsening GI disease if the dog could not be monitored closely.|options,money,staged,risk,barrier,rep
4797|Murphy|Dog|Chronic allergy flare and treatment choices|1|The veterinarian used several reasonable allergy-management branches instead of a one-shot fix.|The discussion moved through food, injections, pills, and topical support as staged options.|options,staged
4799|Judge|Dog|Leg laceration with local repair first|1|The veterinarian started with the least invasive effective repair path.|The discussion favored local closure and reserved sedation only if the wound or patient tolerance made that necessary.|options,staged,min
4812|Winston|Dog|Recurrent ear-yeast management|1|The veterinarian stayed close to minimum-responsible chronic management rather than escalating unnecessarily.|The plan emphasized ongoing ear maintenance and targeted treatment without pushing a broader workup.|options,staged,min
4817|Thor|Cat|Fragmentary establish-care urinary history|1|The available text is too limited to show a meaningful care-path discussion.|The transcript does not provide enough of the visit to support nuanced coding beyond noting no clear options branch.|nooption
4824|Tango|Dog|Chronic allergy case with compliance limits|1|The veterinarian built a workable chronic-care plan despite clear real-world constraints.|The discussion combined Cytopoint, diet limits, and management expectations in a staged way while acknowledging the owner's difficulty controlling exposures.|options,staged,barrier
4849|Coco and Kasha|Cat|Routine vaccines with optional senior screening|1|A routine preventive visit where alternatives were not really the issue.|The conversation was mainly about overdue vaccines, weight, and optional annual blood work.|nooption
4850|Coco and Kasha|Cat|Duplicate-like routine vaccine continuation|1|This reads like a continuation of a routine preventive visit, not a real options case.|The transcript does not show a meaningful affordability or branching discussion.|nooption
4853|Izzy|Dog|Acute limp with orthopedic workup options|1|The veterinarian used staged orthopedic reasoning with visible downside framing.|The discussion moved through x-rays, pain medication, and surgery possibilities while explaining why the lameness could represent a more serious structural problem.|options,staged,risk
4858|Lily|Cat|Weight loss and likely cancer workup|1|The veterinarian kept a serious chronic case on a staged outpatient track.|The discussion balanced likely cancer or GI disease against appetite support and prednisolone while making the risk profile clear.|options,staged,risk
4860|Jersey|Dog|Routine vaccine and screening visit|1|A straightforward preventive visit where alternatives were not really the issue.|The encounter focused on routine vaccines and heartworm or fecal screening.|nooption
4931|Lola|Dog|Puppy wellness with diet and house-training guidance|1|Routine puppy care still involved a minimum-responsible first-step approach.|The discussion stayed conservative around feeding schedule, behavior, and preventive timing rather than escalating ordinary puppy issues.|options,staged,min
4932|Wrigley|Cat|Senior wellness with murmur and urinary concerns|1|The veterinarian staged next steps across several age-related concerns.|The discussion paired senior blood work, urine testing, and possible echo referral while explaining why the new murmur mattered.|options,staged,risk
4935|Kazu|Cat|CKD senior cat recheck|1|The veterinarian managed a complicated geriatric case through staged chronic-care decisions.|The plan covered blood pressure, blood work, subcutaneous-fluid continuation, and supportive care with clear medical caution.|options,staged,risk
4946|Maverick|Dog|Puppy diarrhea after food switch|1|The veterinarian used a minimum-responsible outpatient approach for a common young-dog problem.|The discussion paired bland-diet logic and vaccine timing with conservative GI management rather than over-escalation.|options,staged,min
4950|Boogie|Dog|Chronic nasal issue with respiratory versus dental rule-outs|1|The veterinarian used staged diagnostics to sort two plausible serious causes.|The discussion contrasted respiratory testing with dental disease and kept referral logic visible rather than forcing one answer too early.|options,staged,risk,rep
4955|Yuri|Dog|Limping with patella versus cruciate concern|1|The veterinarian used supportive care first while keeping surgery in view if the dog failed to improve.|The discussion worked through rest, anti-inflammatory use, and escalation thresholds for a chronic hindlimb issue.|options,staged,risk,rep
4962|Miley|Dog|Routine rabies-only follow-up|1|A routine preventive visit where alternatives were not really the issue.|The available text reads like a short maintenance encounter without a meaningful care-path branch.|nooption
4964|Flynn|Cat|Mouth pain and dental concern|1|The veterinarian framed the case as staged oral workup rather than pretending a quick fix existed.|The discussion moved through exam findings and likely dental follow-up while keeping pain and severity visible.|options,staged,risk
5225|Shenzi and Yennefer|Dog|Routine household wellness visit|1|A straightforward preventive visit where alternatives were not really the issue.|The encounter focused on annual maintenance and refills rather than an affordability or spectrum-of-care discussion.|nooption
5234|Winston|Dog|Lick granuloma with shot-versus-pill decision|1|The veterinarian used practical branching for a chronic self-trauma problem.|The discussion contrasted oral medication, cone use, and injection-based itch control rather than one fixed plan.|options,staged
5236|Rocky|Cat|Appetite change and possible pain with staged workup|1|The veterinarian kept a broad chronic-disease differential visible while starting narrower.|The discussion used blood work first, held x-rays for later if needed, and mentioned pain-control options in a staged way.|options,staged,risk,rep
5254|Fiona and Lulu|Dog|Fragmented routine wellness visit|1|The available text reads mostly like a routine maintenance encounter.|The transcript is too fragmented to support a meaningful options analysis.|nooption
5268|Tank|Dog|Senior wellness and refill visit|1|A stable chronic-maintenance visit where alternatives were not really the issue.|The conversation focused on blood work tied to medication refill and routine senior monitoring.|nooption
5269|Bentley|Cat|Diabetic-cat recheck and food management|1|A stable chronic-disease follow-up where alternatives were not really the issue.|The visit centered on ongoing diabetic management and prescription-food logistics rather than new branching choices.|nooption
5396|Angel|Dog|Post-ear-treatment follow-up with possible hearing loss|1|This was mostly a follow-up review rather than a developed options conversation.|Risk remained visible because of the possible deafness, but the transcript does not show much branching beyond recheck logic.|nooption,risk
5397|Jaxx|Dog|Dental planning and preanesthetic blood work|1|The veterinarian used staged procedural planning rather than pushing everything at once.|The discussion made blood work and dental timing the next steps for an otherwise stable dog.|options,staged
5401|Jules|Dog|Weight loss and lethargy workup|1|The veterinarian used a narrower first-step medical workup rather than a broad expensive panel immediately.|The discussion paired a send-out thyroid test with focused diagnostics and symptom review in a staged way.|options,staged
5405|Suki|Dog|Chronic overlicking and skin irritation|1|The veterinarian treated the case as a layered chronic problem shaped by real-world limits.|The discussion worked through allergy and behavior possibilities in a staged way rather than forcing one simple cause.|options,staged,barrier
5411|Max|Dog|Neck and back pain recurrence|1|The veterinarian used supportive care and monitoring boundaries for a painful recurrence.|The discussion centered on pain localization, gabapentin, and what would justify further escalation.|options,staged,risk
5418|Rumi|Dog|Acute eye problem with stain-guided treatment|1|The veterinarian used a clear decision tree based on what the stain test showed.|The discussion contrasted steroid-containing versus antibiotic eye medication and explained why the stain result mattered.|options,staged,risk
5430|Kittens|Cat|New-kitten URI and parasite management|1|The veterinarian used staged infectious-disease management in a crowded new-home context.|The plan delayed vaccines briefly, treated likely URI or herpes issues, and accounted for the rescue-transition barriers in the household.|options,staged,risk,barrier
5478|Apollo|Cat|Severe limb injury with amputation versus waiting|1|This is a strong example of major-decision staged care in a financially visible context.|The discussion contrasted continued monitoring with likely amputation, considered combining procedures, and surfaced insurance and cost realities without softening the medical stakes.|options,money,staged,risk,barrier,rep
5480|Daisy Mae|Dog|Routine puppy vaccines and planning|1|Routine puppy care still involved several staged preventive decisions.|The visit covered vaccine sequence, kennel-cough timing, and spay or behavior guidance without a meaningful affordability conflict.|options,staged
5483|Capone|Dog|Battery exposure with outpatient monitoring plan|1|The veterinarian used a conservative but risk-aware toxicology plan.|The discussion followed poison-control guidance, added stomach protection, and explained what signs would require escalation.|options,staged,risk
5492|Miller|Dog|Allergy flare around the eyes|1|The veterinarian used several outpatient branches for a recurring skin problem.|The discussion moved through Bravecto, eye ointment, antihistamine or Cytopoint support, and demodex coverage in a staged way.|options,staged
5493|Tucker|Dog|Apoquel refill with explicit pharmacy savings|1|This is a clear cost-logistics case inside routine chronic management.|The veterinarian discussed written prescriptions and outside-pharmacy savings while keeping the chronic itch and trazodone plan medically straightforward.|options,money,pay,pharmacy,staged,rep
5500|Medea|Cat|Hyperthyroid cat with lethargy and anorexia|1|The veterinarian used staged testing to sort overlapping chronic-disease causes.|The discussion paired blood work and urine testing with clear concern for kidney disease, urinary infection, or thyroid progression.|options,staged,risk
5503|MJ|Dog|Reduced appetite and pain-rule-out visit|1|The veterinarian used a staged workup before defaulting to pain medication.|The discussion tied blood work to possible anti-inflammatory use and explained why the dog needed screening first.|options,staged,risk
5504|Denali|Dog|Restlessness and abdominal-pain concern|1|The veterinarian treated the case as potentially serious while still using staged diagnostics.|The discussion kept vomiting history and abdominal pain in view and moved toward medical workup rather than false reassurance.|options,staged,risk
5735|Bear|Dog|Diarrhea with conservative outpatient support|1|This was a minimum-responsible GI case, not a heavy-workup visit.|The discussion centered on fluids, probiotic or fiber support, and bland-diet guidance for a dog that still sounded stable.|options,staged,min
5736|Briar Rose|Dog|Heavy breathing with chest workup|1|The veterinarian used staged diagnostics in a clearly higher-risk cardiopulmonary case.|The discussion paired chest x-rays and blood work with oxygen or hospitalization logic while keeping the seriousness visible.|options,staged,risk,rep
5782|Waldo|Dog|Dental consult with CT referral|1|The veterinarian used referral and medical support rather than pretending the case was simple.|The discussion paired antibiotics and pain medication with CT or specialty planning for advanced dental disease.|options,staged,risk
5826|Harli|Dog|Seasonal allergy management|1|The veterinarian used several practical itch-control branches for a common chronic problem.|The discussion contrasted injections, pills, wipes, and ear care as staged options.|options,staged
5828|Maximus|Dog|Routine establish-care visit|1|A straightforward maintenance visit where alternatives were not really the issue.|The transcript reads like a basic establish-care and prevention encounter.|nooption
5829|Aries|Dog|Vomiting and breathing concern with hospital framing|1|The veterinarian balanced risk explanation with staged care choices.|The discussion contrasted imaging and outpatient care with hospitalization while explaining why aspiration or pneumonia was a concern.|options,staged,risk,rep
5835|Peyton|Dog|Bump and licking concern under owner anxiety|1|The veterinarian used staged sampling and monitoring while acknowledging the owner's fear context.|The discussion covered FNA, anal-gland check, and blood work rather than overcommitting to one diagnosis.|options,staged,risk,barrier
5842|Mia|Cat|Complex chronic-care visit with owner-directed limits|1|The veterinarian tried to keep a medically coherent plan inside a highly constrained chronic case.|The discussion moved through diet, dental and ultrasound planning, and travel medication while the owner resisted several recommendations and wanted broad refill flexibility.|options,staged,risk,barrier
5852|Pi|Dog|Puppy diarrhea with fecal-first outpatient plan|1|The veterinarian used minimum-responsible GI care for a stable young dog.|The discussion paired fecal testing with fiber, probiotics, and bland-diet guidance instead of a heavier immediate workup.|options,staged,min
5864|Doras|Dog|Limping and lethargy with x-ray versus rest plan|1|The veterinarian framed a clear staged orthopedic decision rather than assuming a fracture.|The discussion contrasted immediate imaging with anti-inflammatory rest and added gabapentin for a high-energy dog that might reinjure herself.|options,staged,risk
5866|Koda|Dog|Hindlimb deformity and chronic lameness workup|1|The veterinarian used imaging and localization logic rather than guessing at the cause.|The discussion focused on x-rays, possible congenital or old-trauma explanations, and what part of the limb was most suspicious.|options,staged,risk
5895|Bailey|Dog|Annual visit with autoimmune eye disease|1|A routine wellness visit turned into a clear staged chronic-eye plan.|The veterinarian ruled out a scratch, explained pannus, and set up long-term eye-drop management with recheck expectations.|options,staged,risk
5902|Enzo|Dog|Puppy vaccines with collar and microchip choices|1|Routine puppy care still involved several practical branches beyond the shots themselves.|The conversation covered nose-lead versus collar options, neuter timing, and whether to microchip now or later.|options,staged
5908|Beauregard|Dog|Skin-thickening lesion with cytology first|1|The veterinarian chose sampling before assuming the lesion needed surgery.|The discussion used cytology to sort irritated skin from a more significant mass and then planned a recheck and longer-acting treatment.|options,staged,min
5910|Espresso|Cat|Routine kitten booster visit|1|A straightforward preventive visit where alternatives were not really the issue.|The encounter focused on booster timing and a possible fecal sample rather than a meaningful care-path branch.|nooption
5914|Luca|Dog|Recurrent bloody stool with stress-colitis framing|1|The veterinarian used GI diet and probiotic support before escalating further.|The discussion treated the case as likely stress-related colitis, kept hospitalization thresholds visible, and added calming medication only if future events triggered flares.|options,staged,risk,barrier
5943|Chula|Dog|Routine vaccines with dental-price question|1|This was mostly a routine preventive visit with a small amount of explicit cost talk.|The owner asked for a dental estimate, but the care path for the current visit itself remained straightforward.|money,nooption
5945|Wall-E|Dog|Dry-skin flare with topical versus oral treatment|1|The veterinarian used microscope-guided skin management rather than guessing.|The discussion contrasted mousse or shampoo care with possible oral antibiotic support after checking for infection.|options,staged
6217|Frankie|Cat|Inappropriate urination with urine and blood testing|1|The veterinarian used a staged diagnostic approach to separate stress from medical disease.|The discussion paired urine and blood work with murmur counseling and ultrasound-assisted sample collection rather than assuming the problem was only behavioral.|options,staged,risk
6219|Layla|Dog|Persistent hind-foot pain after a jump|1|The veterinarian used imaging and conservative follow-up for a painful but not obviously fractured limb.|The discussion led to x-rays and then rest with pain medication after no clear fracture was found.|options,staged
6221|Ronaldo|Cat|Ascites case ending in euthanasia|1|This was a high-risk triage conversation rather than an options case.|The veterinarian explained why the abdominal fluid looked most consistent with cancer and helped the family move to euthanasia.|nooption,risk
6222|Lilyshay|Dog|Breathing concern with sedation versus x-ray choice|1|This is a clear cost-visible triage case where the veterinarian still pushed toward the safer answer.|The discussion contrasted calming medication alone with chest x-rays, named the prices, and explained why imaging was the only way to rule out something more serious than stress.|options,money,staged,risk,barrier,rep
6223|George|Dog|Recurrent bloody diarrhea with supportive treatment|1|The veterinarian treated a stable but messy GI flare through outpatient steps first.|The discussion paired fiber paste, metronidazole, bland diet, and fecal testing while naming the hydration and vomiting thresholds that would justify escalation.|options,staged,risk
6224|Ruby|Dog|Neck puncture wound follow-up plan|1|The veterinarian used a simple wound-closure and monitor approach rather than overcomplicating the injury.|The discussion focused on drainage expectations, antibiotics, pain control, and signs of infection to watch for.|options,staged,risk
6225|Athena|Cat|Urinary straining with in-house urine plan|1|The veterinarian used a practical first-step urinary workup and adjusted when the bladder was too small.|The discussion contrasted liquid antibiotics with a long-acting shot, then shifted to fluids and a retry once sample collection proved difficult.|options,staged
6243|Daisy|Dog|Toy ingestion plus puppy vaginitis workup|1|The veterinarian handled two mild but real problems through focused outpatient steps.|The discussion paired induced vomiting and anti-nausea care with urine testing so a likely vaginitis case would not be undertreated if it was actually a urinary infection.|options,staged,risk
6244|Kohler|Dog|Conjunctivitis with stain-guided drop choice|1|The veterinarian used a simple branching eye-workup rather than treating blindly.|The discussion ruled out a scratch first and then chose drops over ointment to make home treatment more realistic.|options,staged,risk
6245|Rosie|Dog|Storm anxiety medication planning|1|The veterinarian gave a clear anticipatory plan rather than waiting for the next storm to fail.|The discussion focused on trazodone timing and why it works better before the fear response peaks.|options,staged
6246|Ozzie|Dog|Grooming cut with coverage and itch control|1|The veterinarian used straightforward wound support rather than over-treating a small injury.|The discussion centered on cleaning the area, topical itch control, and ways to protect the neck from self-trauma.|options,staged
6247|Oliver|Dog|Surgery-note only transcript|1|This file is an operative note rather than an exam-room conversation.|It does not contain a meaningful owner-facing care-path discussion to code.|nooption
6248|Bailey|Dog|Pneumonia follow-up with appetite and hydration support|1|This is a strong example of medically grounded outpatient branching in a respiratory case.|The veterinarian continued antibiotics, added anti-nausea and appetite support, discussed fluids under the skin, and kept worsening-breathing thresholds visible.|options,staged,risk,rep
6342|Dwight household|Dog|Routine multi-dog wellness visit|1|This was mainly a preventive visit where alternatives were not really the issue.|The encounter focused on vaccines, screening, written prevention refill, and ear cleaner maintenance for one dog.|nooption,pay
6353|Luna|Dog|Boarding-related cough with supportive care|1|The veterinarian used minimum-responsible treatment instead of reflexively reaching for antibiotics.|The discussion treated the problem as likely upper-airway viral disease and used a steroid cough suppressant plus steam support.|options,staged,min
6360|Billy|Dog|Diarrhea in an older dog with supportive-first plan|1|The veterinarian started with fluids, fiber, appetite support, and bland diet while keeping bigger workup steps ready.|The discussion made blood work and ultrasound the next level only if the dog failed to turn the corner with conservative GI care.|options,staged,risk,min
6392|Wink|Dog|Chronic eye care in a frail rescue dog|1|The veterinarian simplified the eye regimen while staying realistic about vision loss and chronic management.|The discussion shifted to easier drops, refills, and home-handling technique while keeping dry-eye and infection logic clear.|options,staged,risk
6398|Callie|Dog|Bladder-stone dissolution follow-up and incontinence meds|1|The veterinarian used staged chronic management rather than rushing to surgery.|The discussion showed near-resolution on x-ray, planned one more recheck, and considered changing the incontinence medication strategy to fit the dog's current needs.|options,staged
6589|Gus|Dog|Post-ER recheck with likely fat-pad concern|1|This was largely a reassurance recheck rather than a developed options conversation.|The main new branch was whether to aspirate a small likely-fatty lump, but the visit mostly confirmed that the dog was improving.|nooption
6596|Ari|Dog|Diarrhea with stool testing and Lyme concern|1|This is a cost-visible outpatient GI case that still stays medically measured.|The veterinarian used bland diet, fiber, fluids, and fecal testing first, explained when antibiotics were not yet necessary, and openly priced the add-on Lyme test bundle.|options,money,staged,risk,rep
6605|Lilly|Dog|Rectal bleeding from likely anal-gland infection|1|The veterinarian used a focused local explanation rather than overcomplicating the problem.|The discussion connected the bleeding to early anal-gland trouble, added antibiotics and a stool-softening support product, and sent out the fecal just to make sure nothing else was brewing.|options,staged
6624|Thor|Cat|Routine rabies and nail-trim visit|1|A straightforward maintenance visit where alternatives were not really the issue.|The encounter focused on routine exam, rabies update, and nail trim for a cat premedicated for handling.|nooption
6626|Cody|Dog|Annual wellness with head cyst and aging-eye questions|1|This was mostly a routine annual visit rather than a real options encounter.|The veterinarian reassured the owner about nuclear sclerosis, reviewed the recurrent head growth, and completed normal screening and vaccine updates.|nooption
6635|Bailey|Dog|Acute lethargy with obstruction versus marijuana question|1|This is a strong staged triage case that explicitly compares reasonable next-step paths.|The veterinarian reviewed x-rays, used ultrasound on the liver, argued against obstruction, and contrasted waiting it out against overnight fluids while explaining why marijuana exposure fit the presentation.|options,staged,risk,rep
6637|Rocky|Dog|Severe ear infection with explicit pricing|1|This was a practical chronic-ear visit with both treatment branching and visible cost talk.|The discussion covered deeper cleaning, heavy-hitter ear medication, maintenance cleaner, vaccines, and an itemized price estimate.|options,money,staged
6640|Murphy|Cat|Routine kitten vaccine visit|1|A straightforward preventive visit where alternatives were not really the issue.|The encounter focused on exam, rabies update, and neuter timing rather than a meaningful affordability branch.|nooption
6651|Daisy|Dog|Routine vaccine update visit|1|A straightforward preventive visit where alternatives were not really the issue.|The encounter focused on vaccine selection and routine screening with no broader care-path negotiation.|nooption
6654|Victor|Dog|Glaucoma and corneal-ulcer recheck|1|The veterinarian used staged chronic-eye management while watching closely for pain control and pressure change.|The discussion kept the anti-glaucoma plan, one more short recheck, and home safety modifications in view rather than pretending the problem was solved.|options,staged,risk
6656|Polly|Dog|Brief wellness and mild weight-loss concern|1|The available text reads like a routine wellness encounter with a minor monitoring concern.|The transcript is too short to show a meaningful options conversation beyond noting slight weight change in an otherwise routine visit.|nooption
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
      title: 'Andy Hand-Coded Batch 7',
      date: '2026-03-18',
      selectionSeed: '20260318-wave7',
      selectionMethod: 'Seventh non-overlapping 100-transcript hand-coded batch from the Transcripts folder using the uncoded backlog manifest.',
      memoPath: 'Andy_600_Transcript_Analysis.md',
      ids: transcripts.map((item) => item.id)
    },
    transcripts
  };
})();
