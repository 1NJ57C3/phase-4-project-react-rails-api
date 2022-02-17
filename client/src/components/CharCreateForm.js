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
          <Button> Down ATK</Button>
          <Label>ATK</Label>
          <Button> Up ATK</Button>
        </div>
        <div>
          <Button> Down ACC</Button>
          <Label>ACC</Label>
          <Button> Up ACC</Button>
        </div>
        <div>
          <Button> Down VIT</Button>
          <Label>VIT</Label>
          <Button> Up VIT</Button>
        </div>
        <div>
          <Button> Down LUK</Button>
          <Label>LUK</Label>
          <Button> Up LUK</Button>
        </div>
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
