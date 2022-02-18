import React, { useState, useEffect } from "react";
import { Label, Input, Button } from "../styles";
import { Link, useNavigate } from "react-router-dom";

function CharCreateForm() {
  useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((data) => setJobs(data));
  }, []);

  const [formValue, setFormValue] = useState({
    char_name: "",
    job: "",
    atk: 0,
    acc: 0,
    vit: 0,
    luk: 0,
    arm: 0,
    statPts: 5,
  });
  const [jobs, setJobs] = useState([]);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (formValue.statPts > 0) {
      alert("Spend remaining stat points, bitch");
    } else if (formValue.char_name.length < 3) {
      alert("Give us a better name than that, bitch");
    } else {
      fetch("/characters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      })
        .then((r) => r.json())
        .then((characterInfoReturn) => {
          navigate(`/characters/${characterInfoReturn.id}`);
        });
    }
  }

  function selectWar() {
    setFormValue({
      ...formValue,
      job: jobs[0].job_name,
      atk: jobs[0].atk,
      acc: jobs[0].acc,
      luk: jobs[0].luk,
      vit: jobs[0].vit,
      statPts: 5,
    });
  }

  function selectThf() {
    setFormValue({
      ...formValue,
      job: jobs[1].job_name,
      atk: jobs[1].atk,
      acc: jobs[1].acc,
      luk: jobs[1].luk,
      vit: jobs[1].vit,
      statPts: 5,
    });
  }
  function selectWiz() {
    setFormValue({
      ...formValue,
      job: jobs[2].job_name,
      atk: jobs[2].atk,
      acc: jobs[2].acc,
      luk: jobs[2].luk,
      vit: jobs[2].vit,
      statPts: 5,
    });
  }

  function handleIncrementClick(e) {
    let stat = e.target.parentNode.children[1].innerHTML
      .slice(-3)
      .toLowerCase();

    setFormValue({
      ...formValue,
      [stat]: formValue[stat] + 1,
      statPts: formValue.statPts - 1,
    });
  }

  function handleDecrementClick(e) {
    let stat = e.target.parentNode.children[1].innerHTML
      .slice(-3)
      .toLowerCase();

    if (formValue.job === "warrior") {
      formValue[stat] === jobs[0][stat]
        ? alert("Cannot go below base value")
        : setFormValue({
            ...formValue,
            [stat]: formValue[stat] - 1,
            statPts: formValue.statPts + 1,
          });
    } else if (formValue.job === "thief") {
      formValue[stat] === jobs[1][stat]
        ? alert("Cannot go below base value")
        : setFormValue({
            ...formValue,
            [stat]: formValue[stat] - 1,
            statPts: formValue.statPts + 1,
          });
    } else if (formValue.job === "wizard") {
      formValue[stat] === jobs[2][stat]
        ? alert("Cannot go below base value")
        : setFormValue({
            ...formValue,
            [stat]: formValue[stat] - 1,
            statPts: formValue.statPts + 1,
          });
    }
  }

  return (
    <div className='cform'>
      <div className='cformhead'>
        <h1>Choose your Duelist</h1>
        <Button onClick={selectWar}> Warrior </Button>
        <Button onClick={selectThf}> Thief </Button>
        <Button onClick={selectWiz}> Wizard </Button>
      </div>

      <Label>
        Character Name: <br />
        <input
          className='cform'
          type="text"
          name="name"
          placeholder='Character Name...'
          value={formValue.name}
          onChange={(e) =>
            setFormValue({ ...formValue, char_name: e.target.value })
          }
        />
      </Label>

      <div className='cformstats'>
        <span>
          <Button onClick={(e) => handleDecrementClick(e)}>◀</Button>
          <Label>{formValue.atk} ATK</Label>
          <Button onClick={(e) => {formValue.statPts > 0 ? handleIncrementClick(e) : console.log("Well, shit")}}>▶</Button>
        </span>
        <span>
          <Button onClick={(e) => handleDecrementClick(e)}>◀</Button>
          <Label>{formValue.acc} ACC</Label>
          <Button onClick={(e) => {formValue.statPts > 0 ? handleIncrementClick(e) : console.log("Well, shit")}}>▶</Button>
        </span>
        <span>
          <Button onClick={(e) => handleDecrementClick(e)}>◀</Button>
          <Label>{formValue.vit} VIT</Label>
          <Button onClick={(e) => {formValue.statPts > 0 ? handleIncrementClick(e) : console.log("Well, shit")}}>▶</Button>
        </span>
        <span>
          <Button onClick={(e) => handleDecrementClick(e)}>◀</Button>
          <Label>{formValue.luk} LUK</Label>
          <Button onClick={(e) => {formValue.statPts > 0 ? handleIncrementClick(e) : console.log("Well, shit")}}>▶</Button>
        </span>
      </div>

      <Label>Attributes Left: {formValue.statPts}</Label>
      <br />

      <form onSubmit={handleSubmit}>
        <Button type="submit" value="Submit">Submit</Button>
      </form>
    </div>
  );
}

export default CharCreateForm;
