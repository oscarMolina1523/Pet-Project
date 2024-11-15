import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Card } from "../../ui/card";
import { Label } from "../../ui/label";

const HomeTestimonialsComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-sky gap-8">
      <div className="w-1/2">
        <Label className="text-dark-orange text-center text-[3rem] font-semibold tracking-wide">Here's what pet owners have to say about Fetch! Pet Care...</Label>
      </div>
      <div className="relative flex flex-row w-full h-1/2 items-center justify-center gap-8">
        <Card className=" absolute flex flex-col z-30 w-1/3 h-full items-center py-6 gap-4 bg-gradient-to-tr from-dark-blue to-sky-blue rounded-b-3xl shadow-lg bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1440 320%22><path fill=%22%23ffffff%22 fill-opacity=%220.3%22 d=%22M0,32L80,58.7C160,85,320,139,480,176C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z%22></path></svg>')] bg-bottom bg-no-repeat">
          <div className="rounded-full">
            <img
              className="rounded-full h-[5rem]"
              src="https://womensxtech.com/wp-content/uploads/2024/02/meet-asian-girl.jpg"
              alt="img-person"
            />
          </div>
          <Label className="text-surface-neutral tracking-wide">Kenned Dsouza</Label>
          <Label className="text-center px-4 text-surface-neutral tracking-wide leading-[1.3rem]">
            "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing."
          </Label>
        </Card>
        <div className="w-4/5 flex flex-row absolute bg-custom-orange-1 px-8 justify-around">
          <div className="absolute inset-y-0 right-0 flex items-center pr-1">
            <div className="bg-custom-orange-3 p-2 rounded-full">
              <ArrowRight className="text-surface-neutral" />
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1">
            <div className="bg-custom-orange-3 p-2 rounded-full">
              <ArrowLeft className="text-surface-neutral" />
            </div>
          </div>
        </div>
        <Card className="flex flex-col w-1/3 items-center py-6 gap-4 bg-gradient-to-tr from-dark-orange to-custom-orange-2 rounded-b-3xl shadow-lg bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1440 320%22><path fill=%22%23ffffff%22 fill-opacity=%220.3%22 d=%22M0,32L80,58.7C160,85,320,139,480,176C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z%22></path></svg>')] bg-bottom bg-no-repeat">
          <div className="rounded-full">
            <img
              className="rounded-full h-[5rem]"
              src="https://womensxtech.com/wp-content/uploads/2024/02/meet-asian-girl.jpg"
              alt="img-person"
            />
          </div>
          <Label className="text-surface-neutral tracking-wide">Kenned Dsouza</Label>
          <Label className="text-center px-4 text-surface-neutral tracking-wide leading-[1.3rem]">
            "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing."
          </Label>
        </Card>
        <Card className="flex flex-col w-1/3 items-center py-6 gap-4 bg-gradient-to-tr from-dark-orange to-custom-orange-2 rounded-b-3xl shadow-lg bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1440 320%22><path fill=%22%23ffffff%22 fill-opacity=%220.3%22 d=%22M0,32L80,58.7C160,85,320,139,480,176C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z%22></path></svg>')] bg-bottom bg-no-repeat">
          <div className="rounded-full">
            <img
              className="rounded-full h-[5rem]"
              src="https://womensxtech.com/wp-content/uploads/2024/02/meet-asian-girl.jpg"
              alt="img-person"
            />
          </div>
          <Label className="text-surface-neutral tracking-wide">Kenned Dsouza</Label>
          <Label className="text-center px-4 text-surface-neutral tracking-wide leading-[1.3rem]">
            "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing."
          </Label>
        </Card>
      </div>
    </div>
  );
}

export default HomeTestimonialsComponent;