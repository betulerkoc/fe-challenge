import React from 'react';
import { DocumentScanner, SignAndStamp, BatchScan, AdvancedFilter, Export } from "../components/Icons";

export interface Slide {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: React.ReactElement;
}

export const slides: Slide[] = [
    {
        title: "Document Scanner",
        subtitle: "Scan with Ease",
        description: "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.",
        image: "assets/images/documentScanner.png",
        icon: React.createElement(DocumentScanner),
    },
    {
        title: "Sign & Stamp",
        subtitle: "One-Tap Focus",
        description: "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!",
        image: "assets/images/signatureAndStamp.png",
        icon: React.createElement(SignAndStamp),
    },
    {
        title: "Batch Scanning",
        subtitle: "Multiple Page Scan",
        description: "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.",
        image: "assets/images/batchScan.png",
        icon: React.createElement(BatchScan),
    },
    {
        title: "Advanced Filters",
        subtitle: "Unique Filters",
        description: "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.",
        image: "assets/images/advancedFilters.png",
        icon: React.createElement(AdvancedFilter),
    },
    {
        title: "Export & Share",
        subtitle: "All-Round Conversion",
        description: "Export your scans as PDF,JPG,ZIP,TXT and Word.",
        image: "assets/images/exportAndShare.png",
        icon: React.createElement(Export),
    }
];