# BYOD – Zero Trust Secure Workspace

A Zero Trust-based Bring Your Own Device (BYOD) security platform designed to allow employees to securely access organizational resources from personal devices while preserving device privacy.

The system creates an **isolated encrypted workspace** on the employee device and continuously monitors activity within that workspace using **User and Entity Behavior Analytics (UEBA)** powered by machine learning.

---

## Problem Statement

Organizations increasingly allow employees to work using personal devices. However, this introduces security risks such as:

- unauthorized data access
- malware-infected devices
- insider threats
- abnormal user behavior

Traditional monitoring systems compromise user privacy by tracking entire devices.

This project solves the problem by implementing a **Zero Trust architecture where monitoring occurs only inside a secure workspace.**

---

## Key Features

- Secure encrypted workspace for employees(AES-GCM Encryption)
- Device compliance verification before access
- Role-Based Access Control (RBAC)
- UEBA-based anomaly detection
- Secure virtual drive for work files
- Admin dashboard for monitoring alerts
- Privacy-preserving monitoring (only inside workspace)

---

## System Architecture

- User Device
 - Device Compliance Check
- Secure Workspace Environment
- Encrypted Virtual Drive (AES-GCM)
- Role-Based Access Control
- Activity Monitoring Engine
- UEBA ML Model(Anomaly Detection)
- Alert Generation
- Admin Dashboard


## Tech Stack

Backend : Python,Scikit-Learn. Node.js ,Express.js

Frontend : React.js, JavaScript

Security

- AES-GCM Encryption
- Role-Based Access Control

Machine Learning

- Isolation Forest
- UEBA behavioral analytics

---


## Example Anomaly Alerts

- Intern accessing confidential files
- Access during unusual hours
- High-frequency file downloads
- Suspicious IP location

---

## Future Improvements

- integrate deep learning based behavior modeling
- real-time anomaly detection pipeline
- distributed log monitoring system
- adaptive trust scoring system
- support for enterprise scale deployment

---
