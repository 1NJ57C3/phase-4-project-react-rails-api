import React, { useState } from "react";
import { Button } from "../styles";
import { Textarea } from "../styles";
import { Label } from "../styles";

function CharCreateForm() {
  return (
    <div>
      <div>
        <h1>This is Character Create Form</h1>
        <Button> Warrier </Button>
        <Button> Thief </Button>
        <Button> Wizzard </Button>
      </div>
      <Textarea>Input Name Here</Textarea>
      <form>
        <div>
          <Button> Left ATK</Button>
          <Label>ATK</Label>
          <Button> Right ATK</Button>
        </div>
        <Button> Left ACC</Button>
        <Label>ACC</Label>
        <Button> Right ACC</Button>
        <Button> Left VIT</Button>
        <Label>VIT</Label>
        <Button> Right VIT</Button>
        <Button> Left LUK</Button>
        <Label>LUK</Label>
        <Button> Right LUK</Button>
      </form>
      <Label>Attributes Left: "Number Here"</Label>
      <Button>ReRoll</Button>
      <form>
        <Button>Create</Button>
      </form>
    </div>
  );
}

export default CharCreateForm;
