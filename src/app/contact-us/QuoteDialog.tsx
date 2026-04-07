"use client";

import Button from "@/components/common/button/Button";
import { Icon } from "@/components/icon/icon";
import { Dialog } from "@/components/dialog/dialog";
import { useState } from "react";
import { OutlinedTextField } from "@/components/text-field/text-field";
import { OutlinedSelect, SelectOption } from "@/components/select/select";
import { Checkbox } from "@/components/checkbox/checkbox";
import { IconButton } from "@/components/button/button";

export interface QuoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteDialog({ isOpen, onClose }: QuoteDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClosed={handleClose}
      onClose={handleClose}
      style={
        {
          "--md-dialog-container-min-width": "min(800px, 90vw)",
        } as React.CSSProperties
      }
    >
      <div slot="headline" className="flex w-full items-start justify-between gap-4">
        <div>
          <h2 className="text-on-surface text-headline-small">Get A Quote</h2>
          <p className="text-on-surface-variant text-body-medium mt-1">
            Fill out the form and we will contact you with a custom quote.
          </p>
        </div>
      </div>

      <div slot="content">
        {isSubmitted ? (
          <div className="bg-primary-container text-on-primary-container rounded-xl p-4">
            <p className="text-title-medium">Request submitted successfully</p>
            <p className="text-body-medium mt-1">
              Thanks. Our team will reach out to you soon.
            </p>
          </div>
        ) : (
          <form id="quote-form" className="grid gap-6 mt-4" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <OutlinedTextField
                label="Full name"
                required
                name="fullName"
                placeholder="Your name"
              />
              <OutlinedTextField
                label="Email address"
                required
                type="email"
                name="email"
                placeholder="you@company.com"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <OutlinedSelect
                label="Project type"
                required
                name="projectType"
                defaultValue=""
              >
                <SelectOption value="" disabled>
                  <div slot="headline">Select type</div>
                </SelectOption>
                <SelectOption value="android-app">
                  <div slot="headline">Android app</div>
                </SelectOption>
                <SelectOption value="ios-app">
                  <div slot="headline">iOS app</div>
                </SelectOption>
                <SelectOption value="web-app">
                  <div slot="headline">Web app</div>
                </SelectOption>
                <SelectOption value="dashboard">
                  <div slot="headline">Admin dashboard</div>
                </SelectOption>
                <SelectOption value="other">
                  <div slot="headline">Other</div>
                </SelectOption>
              </OutlinedSelect>

              <OutlinedSelect
                label="Estimated budget"
                name="budget"
                defaultValue=""
              >
                <SelectOption value="" disabled>
                  <div slot="headline">Select budget</div>
                </SelectOption>
                <SelectOption value="under-50k">
                  <div slot="headline">Under INR 50,000</div>
                </SelectOption>
                <SelectOption value="50k-2l">
                  <div slot="headline">INR 50,000 - 2,00,000</div>
                </SelectOption>
                <SelectOption value="2l-10l">
                  <div slot="headline">INR 2,00,000 - 10,00,000</div>
                </SelectOption>
                <SelectOption value="above-10l">
                  <div slot="headline">Above INR 10,00,000</div>
                </SelectOption>
              </OutlinedSelect>
            </div>

            <OutlinedTextField
              label="Project details"
              required
              name="details"
              type="textarea"
              rows={5}
              placeholder="Describe your idea, required features, and timeline."
            />

            <div className="flex items-center gap-3">
              <Checkbox
                id="consent"
                name="consent"
                required
              />
              <label htmlFor="consent" className="text-on-surface-variant text-body-medium cursor-pointer">
                I agree to be contacted regarding this quote request.
              </label>
            </div>
          </form>
        )}
      </div>

      <div slot="actions">
        {!isSubmitted ? (
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="text-primary hover:bg-surface-container rounded-full px-4 py-2 text-label-large"
            >
              Cancel
            </button>
            <Button
              onClick={() => {
                const form = document.getElementById("quote-form") as HTMLFormElement;
                if (form) form.requestSubmit();
              }}
            >
              <Icon slot="icon">send</Icon>
              Submit Request
            </Button>
          </div>
        ) : (
          <Button onClick={handleClose}>
            Close
          </Button>
        )}
      </div>
    </Dialog>
  );
}
