import React, { useState } from "react";
import "../styles/newReport.css";

export default function NewReportForm() {
  const [fieldsetsVisibility, setFieldsetsVisibility] = useState({
    generalInfo: false,
    sadyovrittam: false,
    samanyaPariksha: false,
  });

  // Function to toggle the visibility of a fieldset
  const toggleFieldsetVisibility = (fieldsetName) => {
    setFieldsetsVisibility((prevState) => ({
      ...prevState,
      [fieldsetName]: !prevState[fieldsetName],
    }));
  };

  return (
    <>
      <form className="report" action="/submit" method="post">
        {/* General Information */}
        <fieldset>
          <label
            className="headings"
            onClick={() => toggleFieldsetVisibility("generalInfo")}
          >
            General Information
          </label>
          {fieldsetsVisibility.generalInfo && (
            <>
              <label htmlFor="symptom">Symptom:</label>
              <input type="text" id="symptom" name="symptom" required />
              <label htmlFor="previousHistory">Previous History:</label>
              <textarea
                id="previousHistory"
                name="previousHistory"
                rows="4"
              ></textarea>
              <label htmlFor="previousTreatment">Previous Treatment:</label>
              <textarea
                id="previousTreatment"
                name="previousTreatment"
                rows="4"
              ></textarea>
            </>
          )}
        </fieldset>

        {/* Sadyovrittam */}
        <fieldset>
          <label
            className="headings"
            onClick={() => toggleFieldsetVisibility("sadyovrittam")}
          >
            Sadyovrittam
          </label>
          {fieldsetsVisibility.sadyovrittam && (
            <>
              <label htmlFor="mala_pravritti">Mala Pravritti:</label>
              <input
                type="text"
                id="mala_pravritti"
                name="sadyovrittam.mala_pravritti"
              />

              <label htmlFor="mutra_pravritti">Mutra Pravritti:</label>
              <input
                type="text"
                id="mutra_pravritti"
                name="sadyovrittam.mutra_pravritti"
              />

              <label htmlFor="analam">Analam:</label>
              <input type="text" id="analam" name="sadyovrittam.analam" />

              <label htmlFor="nidra">Nidra:</label>
              <input type="text" id="nidra" name="sadyovrittam.nidra" />

              <label htmlFor="artavam">Artavam:</label>
              <input type="text" id="artavam" name="sadyovrittam.artavam" />

              <label htmlFor="aharam">Aharam:</label>
              <input type="text" id="aharam" name="sadyovrittam.aharam" />

              <label htmlFor="viharam">Viharam:</label>
              <input type="text" id="viharam" name="sadyovrittam.viharam" />

              <label htmlFor="satmya">Satmya:</label>
              <input type="text" id="satmya" name="sadyovrittam.satmya" />

              <label htmlFor="manovastha">Manovastha:</label>
              <input
                type="text"
                id="manovastha"
                name="sadyovrittam.manovastha"
              />

              <label htmlFor="raja_pravritti">Raja Pravritti:</label>
              <input
                type="text"
                id="raja_pravritti"
                name="sadyovrittam.raja_pravritti"
              />

              <label htmlFor="lmp">LMP:</label>
              <input type="text" id="lmp" name="sadyovrittam.lmp" />

              <label htmlFor="edd">EDD:</label>
              <input type="text" id="edd" name="sadyovrittam.edd" />
            </>
          )}
        </fieldset>

        {/* <!-- Samanya Pariksha --> */}
        <fieldset>
          <label
            className="headings"
            onClick={() => toggleFieldsetVisibility("samanyaPariksha")}
          >
            Samanya Pariksha
          </label>
          {fieldsetsVisibility.samanyaPariksha && (
            <>
              <label htmlFor="jivha">Jivha:</label>
              <input type="text" id="jivha" name="samanya_pariksha.jivha" />

              <label htmlFor="netram">Netram:</label>
              <input type="text" id="netram" name="samanya_pariksha.netram" />

              <label htmlFor="nakham">Nakham:</label>
              <input type="text" id="nakham" name="samanya_pariksha.nakham" />

              <label htmlFor="bharam">Bharam:</label>
              <input type="text" id="bharam" name="samanya_pariksha.bharam" />

              <label htmlFor="nadi">Nadi:</label>
              <input type="text" id="nadi" name="samanya_pariksha.nadi" />

              <label htmlFor="rakta_bharam">Rakta Bharam:</label>
              <input
                type="text"
                id="rakta_bharam"
                name="samanya_pariksha.rakta_bharam"
              />

              <label htmlFor="twak">Twak:</label>
              <input type="text" id="twak" name="samanya_pariksha.twak" />

              <label htmlFor="rugnavastha">Rugnavastha:</label>
              <input
                type="text"
                id="rugnavastha"
                name="samanya_pariksha.rugnavastha"
              />

              <label htmlFor="doshavastha">Doshavastha:</label>
              <input
                type="text"
                id="doshavastha"
                name="samanya_pariksha.doshavastha"
              />

              <label htmlFor="doshasthanam">Doshasthanam:</label>
              <input
                type="text"
                id="doshasthanam"
                name="samanya_pariksha.doshasthanam"
              />

              <label htmlFor="dooshyavikriti">Dooshyavikriti:</label>
              <input
                type="text"
                id="dooshyavikriti"
                name="samanya_pariksha.dooshyavikriti"
              />

              <label htmlFor="sambhavya_vyadhi">Sambhavya Vyadhi:</label>
              <input
                type="text"
                id="sambhavya_vyadhi"
                name="samanya_pariksha.sambhavya_vyadhi"
              />
            </>
          )}
        </fieldset>

        {/* Aushadhi Chikitsa */}
        <label htmlFor="aushadhi_chikitsa">Aushadhi Chikitsa:</label>
        <textarea
          id="aushadhi_chikitsa"
          name="aushadhi_chikitsa"
          rows="4"
        ></textarea>

        {/* Chikitsa Kalam */}
        <label htmlFor="chikitsa_kalam">Chikitsa Kalam:</label>
        <input type="text" id="chikitsa_kalam" name="chikitsa_kalam" />

        {/* Panchkarma */}
        <label htmlFor="panchkarma">Panchkarma:</label>
        <input type="text" id="panchkarma" name="panchkarma" />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
