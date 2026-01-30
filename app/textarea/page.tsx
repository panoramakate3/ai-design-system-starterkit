"use client"

import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  ComponentPageLayout,
  ComponentHeader,
  ComponentShowcase,
  ShowcaseSection,
} from "@/components/component-page"
import Link from "next/link"
import { useState } from "react"

export default function TextareaPage() {
  const [charCount, setCharCount] = useState(0)
  const [feedback, setFeedback] = useState("")
  const maxLength = 500

  return (
    <ComponentPageLayout>
      <ComponentHeader
        title="Textarea"
        description="Displays a form textarea or a component that looks like a textarea."
      />

      <div className="mb-6">
        <Link
          href="https://ui.shadcn.com/docs/components/textarea"
          target="_blank"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          View in Shadcn
        </Link>
      </div>

      <ComponentShowcase>
        {/* Basic Textarea */}
        <ShowcaseSection title="Basic Textarea">
          <Textarea placeholder="Type your message here." />
        </ShowcaseSection>

        <Separator />

        {/* With Label */}
        <ShowcaseSection title="With Label">
          <div className="w-full max-w-md space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" placeholder="Type your message here." />
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Helper Text */}
        <ShowcaseSection title="With Helper Text">
          <div className="w-full max-w-md space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" />
            <p className="text-sm text-muted-foreground">
              Brief description for your profile.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Disabled State */}
        <ShowcaseSection title="Disabled State">
          <Textarea
            placeholder="This textarea is disabled"
            disabled
            defaultValue="This content cannot be edited."
          />
        </ShowcaseSection>

        <Separator />

        {/* With Character Count */}
        <ShowcaseSection title="With Character Count">
          <div className="w-full max-w-md space-y-2">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Share your thoughts..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              maxLength={maxLength}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Maximum {maxLength} characters</span>
              <span>
                {feedback.length}/{maxLength}
              </span>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Error State */}
        <ShowcaseSection title="Error State">
          <div className="w-full max-w-md space-y-2">
            <Label htmlFor="error-textarea">Description</Label>
            <Textarea
              id="error-textarea"
              placeholder="Enter description"
              aria-invalid="true"
              defaultValue="Too short"
            />
            <p className="text-sm text-destructive">
              Description must be at least 10 characters.
            </p>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Different Sizes */}
        <ShowcaseSection title="Different Sizes">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <Label>Small (3 rows)</Label>
              <Textarea
                placeholder="Small textarea"
                rows={3}
                className="resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label>Medium (5 rows)</Label>
              <Textarea
                placeholder="Medium textarea"
                rows={5}
                className="resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label>Large (8 rows)</Label>
              <Textarea
                placeholder="Large textarea"
                rows={8}
                className="resize-none"
              />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Resizable */}
        <ShowcaseSection title="Resizable">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <Label>Auto Resize (Default)</Label>
              <Textarea placeholder="This textarea can be resized" />
            </div>
            <div className="space-y-2">
              <Label>Resize Vertical Only</Label>
              <Textarea
                placeholder="Resize vertically only"
                className="resize-y"
              />
            </div>
            <div className="space-y-2">
              <Label>Non-resizable</Label>
              <Textarea
                placeholder="This textarea cannot be resized"
                className="resize-none"
              />
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Comment Form */}
        <ShowcaseSection title="Comment Form">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <h3 className="font-semibold">Leave a Comment</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="comment">Comment</Label>
                <Textarea
                  id="comment"
                  placeholder="What are your thoughts?"
                  rows={4}
                />
              </div>
              <div className="flex gap-2">
                <Button>Post Comment</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Feedback Form */}
        <ShowcaseSection title="Feedback Form">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <div>
              <h3 className="font-semibold mb-2">Send Feedback</h3>
              <p className="text-sm text-muted-foreground">
                Help us improve by sharing your thoughts
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Brief summary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedback-message">Message</Label>
                <Textarea
                  id="feedback-message"
                  placeholder="Describe your feedback in detail..."
                  rows={6}
                  onChange={(e) => setCharCount(e.target.value.length)}
                />
                <p className="text-sm text-muted-foreground">
                  {charCount} characters
                </p>
              </div>
              <Button className="w-full">Submit Feedback</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Contact Form */}
        <ShowcaseSection title="Contact Form">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="How can we help you?"
                  rows={5}
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Review Form */}
        <ShowcaseSection title="Review Form">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <h3 className="font-semibold">Write a Review</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-2xl text-muted-foreground hover:text-yellow-400 transition-colors"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="review-title">Review Title</Label>
                <input
                  id="review-title"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Sum up your review"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="review">Your Review</Label>
                <Textarea
                  id="review"
                  placeholder="Share your experience..."
                  rows={6}
                />
                <p className="text-sm text-muted-foreground">
                  Minimum 50 characters
                </p>
              </div>
              <Button>Submit Review</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Notes Section */}
        <ShowcaseSection title="Notes Section">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Quick Notes</h3>
              <span className="text-sm text-muted-foreground">
                Last saved: 2 minutes ago
              </span>
            </div>
            <Textarea
              placeholder="Take notes here..."
              rows={10}
              defaultValue="Meeting notes:&#10;- Discuss project timeline&#10;- Review budget&#10;- Assign tasks"
            />
            <div className="flex gap-2">
              <Button>Save</Button>
              <Button variant="outline">Clear</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Blog Post Editor */}
        <ShowcaseSection title="Blog Post Editor">
          <div className="w-full max-w-3xl space-y-4 rounded-lg border p-6">
            <h3 className="font-semibold">Create New Post</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="post-title">Title</Label>
                <input
                  id="post-title"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md text-lg"
                  placeholder="Enter post title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="post-excerpt">Excerpt</Label>
                <Textarea
                  id="post-excerpt"
                  placeholder="Brief summary of your post..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="post-content">Content</Label>
                <Textarea
                  id="post-content"
                  placeholder="Write your post content here..."
                  rows={12}
                />
              </div>
              <div className="flex gap-2">
                <Button>Publish</Button>
                <Button variant="outline">Save Draft</Button>
                <Button variant="outline">Preview</Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Support Ticket */}
        <ShowcaseSection title="Support Ticket">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <h3 className="font-semibold">Submit a Support Ticket</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ticket-category">Category</Label>
                <select
                  id="ticket-category"
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option>Technical Issue</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-subject">Subject</Label>
                <input
                  id="ticket-subject"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Brief description of your issue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-description">Description</Label>
                <Textarea
                  id="ticket-description"
                  placeholder="Please provide as much detail as possible..."
                  rows={8}
                />
                <p className="text-sm text-muted-foreground">
                  Include any relevant error messages or screenshots
                </p>
              </div>
              <div className="space-y-2">
                <Label>Priority</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Low
                  </Button>
                  <Button variant="outline" size="sm">
                    Medium
                  </Button>
                  <Button variant="outline" size="sm">
                    High
                  </Button>
                  <Button variant="outline" size="sm">
                    Urgent
                  </Button>
                </div>
              </div>
              <Button className="w-full">Submit Ticket</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Job Application */}
        <ShowcaseSection title="Job Application">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <div>
              <h3 className="font-semibold mb-1">Apply for Position</h3>
              <p className="text-sm text-muted-foreground">
                Senior Software Engineer
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cover-letter">Cover Letter</Label>
                <Textarea
                  id="cover-letter"
                  placeholder="Tell us why you're a great fit for this role..."
                  rows={8}
                />
                <p className="text-sm text-muted-foreground">
                  Explain your relevant experience and why you're interested
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="additional-info">
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="additional-info"
                  placeholder="Any other information you'd like to share..."
                  rows={4}
                />
              </div>
              <Button className="w-full">Submit Application</Button>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Survey Question */}
        <ShowcaseSection title="Survey Question">
          <div className="w-full max-w-2xl space-y-4 rounded-lg border p-6">
            <div>
              <h3 className="font-semibold mb-2">Customer Satisfaction Survey</h3>
              <p className="text-sm text-muted-foreground">
                Question 3 of 5
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="survey-response">
                  What features would you like to see improved?
                </Label>
                <Textarea
                  id="survey-response"
                  placeholder="Share your thoughts..."
                  rows={6}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Previous</Button>
                <Button>Next</Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* With Validation */}
        <ShowcaseSection title="With Validation">
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="valid-textarea">Valid Input</Label>
              <Textarea
                id="valid-textarea"
                placeholder="Type something..."
                defaultValue="This is a valid message with enough characters."
              />
              <p className="text-sm text-green-600">
                ✓ Looks good!
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="invalid-textarea">Invalid Input</Label>
              <Textarea
                id="invalid-textarea"
                placeholder="Type something..."
                aria-invalid="true"
                defaultValue="Short"
              />
              <p className="text-sm text-destructive">
                ✗ Please enter at least 20 characters
              </p>
            </div>
          </div>
        </ShowcaseSection>

        <Separator />

        {/* Auto-growing Textarea */}
        <ShowcaseSection title="Auto-growing">
          <div className="w-full max-w-md space-y-2">
            <Label htmlFor="auto-grow">Message</Label>
            <Textarea
              id="auto-grow"
              placeholder="Start typing and watch this expand..."
              className="min-h-16"
            />
            <p className="text-sm text-muted-foreground">
              This textarea automatically adjusts its height as you type
            </p>
          </div>
        </ShowcaseSection>
      </ComponentShowcase>
    </ComponentPageLayout>
  )
}
