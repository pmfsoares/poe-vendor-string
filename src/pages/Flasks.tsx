import Header from "../components/Header";
import ResultBox from "../components/ResultBox";
import React, {useEffect} from "react";
import FlaskModList from "../components/FlaskModList";
import {flaskPrefix, flaskSuffix} from "../generated/GeneratedFlaskMods";
import {hasKey} from "../utils/LocalStorage";
import {Checkbox} from "./Vendor";
import {FlaskModSettings, generateFlaskOutput, minItemLevel} from "../utils/FlaskOuput";

const Flasks = () => {
    const modGroups = flaskPrefix.concat(flaskSuffix).map((modGroup) => modGroup.description);
    const savedSettings = JSON.parse(localStorage.getItem("flaskSearch") ?? "{}");
    const [selectedPrefix, setSelectedPrefix] = React.useState<string[]>(hasKey(savedSettings, "prefix") ? savedSettings.prefix.filter((v: string) => modGroups.includes(v)) : []);
    const [selectedSuffix, setSelectedSuffix] = React.useState<string[]>(hasKey(savedSettings, "suffix") ? savedSettings.suffix.filter((v: string) => modGroups.includes(v)) : []);
    const [ilevel, setIlevel] = React.useState<string>(hasKey(savedSettings, "ilevel") ? savedSettings.ilevel : "85");
    const [onlyMaxPrefixTierMod, setOnlyMaxPrefixTierMod] = React.useState(hasKey(savedSettings, "onlyMaxPrefixTierMod") ? savedSettings.onlyMaxPrefixTierMod : true);
    const [onlyMaxSuffixTierMod, setOnlyMaxSuffixTierMod] = React.useState(hasKey(savedSettings, "onlyMaxSuffixTierMod") ? savedSettings.onlyMaxSuffixTierMod : true);
    const [matchBothPrefixAndSuffix, setMatchBothPrefixAndSuffix] = React.useState(hasKey(savedSettings, "matchBothPrefixAndSuffix") ? savedSettings.matchBothPrefixAndSuffix : false);

    let [result, setResult] = React.useState("");
    let [minIlevel, setMinIlevel] = React.useState<string|undefined>(undefined);

    useEffect(() => {
        const settings: FlaskModSettings = {
            prefix: selectedPrefix,
            suffix: selectedSuffix,
            ilevel,
            onlyMaxPrefixTierMod,
            onlyMaxSuffixTierMod,
            matchBothPrefixAndSuffix,
        }
        let allMods = flaskPrefix.concat(flaskSuffix);
        let search = generateFlaskOutput(allMods, settings);
        localStorage.setItem("flaskSearch", JSON.stringify(settings));
        setResult(search);
        setMinIlevel(minItemLevel(allMods, settings));
    }, [result, selectedPrefix, selectedSuffix, ilevel, onlyMaxPrefixTierMod, onlyMaxSuffixTierMod, matchBothPrefixAndSuffix]);

    return (
        <div className="wrapper">
            <div className="container-maps">
                <Header text={"Flask Modifiers"}/>
                <ResultBox result={result} warning={minIlevel} reset={() => {
                    setSelectedPrefix([]);
                    setSelectedSuffix([]);
                    setIlevel("85");
                }}/>
                <div className="break"/>
                <div className="item-wide">
                    <label className="modifier-search-label" htmlFor="quantity">Flask item level: </label>
                    <input type="search" className="modifier-quantity-box" id="quantity" name="search-mod"
                           value={ilevel}
                           onChange={v => setIlevel(v.target.value)}/>
                    <Checkbox label="Require that both prefix and suffix matches" value={matchBothPrefixAndSuffix}
                              onChange={setMatchBothPrefixAndSuffix}/>
                </div>
                <div className="break"/>

                <div className="item-half-size">
                    <div className="column-header">Prefix</div>
                    <Checkbox label="Only match prefix with the highest ilevel" value={onlyMaxPrefixTierMod}
                              onChange={setOnlyMaxPrefixTierMod}/>
                    <FlaskModList id="flask-prefix" mods={flaskPrefix} onlyMaxTierMod={onlyMaxPrefixTierMod} ilevel={ilevel}
                                  selected={selectedPrefix} setSelected={setSelectedPrefix}/>
                </div>
                <div className="item-half-size">
                    <div className="column-header">Suffix</div>
                    <Checkbox label="Only match suffix with the highest ilevel" value={onlyMaxSuffixTierMod}
                              onChange={setOnlyMaxSuffixTierMod}/>
                    <FlaskModList id="flask-suffix" mods={flaskSuffix} onlyMaxTierMod={onlyMaxSuffixTierMod} ilevel={ilevel}
                                  selected={selectedSuffix} setSelected={setSelectedSuffix}/>
                </div>
            </div>
        </div>
    )
}

export default Flasks;