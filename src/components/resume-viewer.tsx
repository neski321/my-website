"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Download, FileText } from "lucide-react"

export function ResumeViewer() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Resume</h2>
        <Button asChild>
          <a
            href="https://docs.google.com/document/d/1iEdVgJ2oHSZpCdCDFFT_roXBdrDqMbp1/edit?usp=sharing&ouid=102217200542318471758&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            download="Neskines_Otieno_Resume.pdf"
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </Button>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {isLoading && (
            <div className="flex items-center justify-center h-[600px] bg-muted/30">
              <div className="flex flex-col items-center">
                <FileText className="h-12 w-12 text-muted-foreground animate-pulse" />
                <p className="mt-4 text-muted-foreground">Loading resume...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vRllB09Fs1jIgJW6r81jrixxwWFSNDy3gjMXv45iO2_E3DtlU_P0mb86dToAH9QrQ/pub?embedded=true"
            title="Resume"
            width="100%"
            height="800"
            style={{ border: "none" }}
            onLoad={() => setIsLoading(false)}
            className={isLoading ? "hidden" : "block"}
          ></iframe>
        </CardContent>
      </Card>
    </div>
  )
}
