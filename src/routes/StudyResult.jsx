import { useParams, useNavigate } from "react-router-dom";
import { getProjectById } from "../utils/Storage";
import "../styles/StudyResult.css";

import { FaArrowLeft, FaUser } from "react-icons/fa6";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logo2.png";

export default function StudyResult() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(Number(id));

  if (!project) return <h2 className="not-found">Project Not Found</h2>;

  const FP = project.report.financial_projection;

  function exportPDF() {
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.addImage(logo, "PNG", 75, 12, 50, 35);

    
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Feasibility Study Report", 105, 55, { align: "center" });

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.text("Issued by: Moqaddim Business Intelligence Department", 105, 63, {
      align: "center",
    });
    pdf.text("Date: " + new Date().toLocaleDateString(), 105, 70, {
      align: "center",
    });

    let y = 85;

    
    const addSection = (title, content) => {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text(title, 20, y);
      y += 8;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);

      const wrapped = pdf.splitTextToSize(content, 170);
      pdf.text(wrapped, 20, y);

      y += wrapped.length * 6 + 12;

      if (y > 260) {
        pdf.addPage();
        y = 20;
      }
    };

    addSection(
      "Executive Summary",
      "This feasibility report provides an analytical evaluation of the proposed business idea. It covers market demand, operational costs, risk level, and financial projections for three fiscal years. The goal is to support investors and stakeholders in making informed decisions."
    );

   
    addSection("Project Name", project.input.name);
    addSection("Idea Description", project.input.industry);
    addSection("Cost Analysis", project.report.cost_analysis);
    addSection("Market Analysis", project.report.market_analysis);
    addSection("Risk Assessment", project.report.risk_assessment);


    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.text("Financial Projection", 20, y);
    y += 10;

    autoTable(pdf, {
      startY: y,
      head: [["Year", "Revenue (SAR)", "Expenses (SAR)", "Profit (SAR)"]],
      body: [
        ["Year 1", FP.revenue_year1, FP.expenses_year1, FP.profit_year1],
        ["Year 2", FP.revenue_year2, FP.expenses_year2, FP.profit_year2],
        ["Year 3", FP.revenue_year3, FP.expenses_year3, FP.profit_year3],
      ],
      theme: "grid",
      headStyles: {
        fillColor: [8, 49, 45],
        halign: "center",
        textColor: 255,
      },
      styles: { halign: "center" },
    });

    y = pdf.lastAutoTable.finalY + 12;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.text(`ROI: ${FP.roi}%`, 20, y);
    y += 6;
    pdf.text(`Break-even: ${FP.break_even_months} months`, 20, y);
    y += 15;

    addSection("Recommendations", project.report.recommendations);

   
    pdf.setFontSize(10);
    pdf.setTextColor(120, 120, 120);

    pdf.text("Moqaddim Business Tools Platform — © 2025", 105, 280, {
      align: "center",
    });
    pdf.text("Email: support@moqaddim.sa | www.moqaddim.sa", 105, 287, {
      align: "center",
    });

    pdf.save(`${project.input.name}_Feasibility_Report.pdf`);
  }

  return (
    <div className="study-root">
      {/* NAVBAR */}
      <header className="study-navbar">
        <div className="nav-left">
          <div className="back-btn" onClick={() => navigate("/projects")}>
            <FaArrowLeft className="back-icon" />
          </div>
          <img src={logo} className="nav-logo" alt="logo" />
        </div>

        <div className="nav-right">
          <button className="nav-export-btn" onClick={exportPDF}>
            📄 Export PDF
          </button>
          <FaUser className="nav-profile" />
        </div>
      </header>

      <div className="result-header">
        <h1 className="result-title">Feasibility Study Report</h1>
      </div>

      <div className="result-container">
        <section>
          <h2>Project Name</h2>
          <p>{project.input.name}</p>
        </section>

        <section>
          <h2>Idea Description</h2>
          <p>{project.input.industry}</p>
        </section>

        <section>
          <h2>Cost Analysis</h2>
          <p>{project.report.cost_analysis}</p>
        </section>

        <section>
          <h2>Market Analysis</h2>
          <p>{project.report.market_analysis}</p>
        </section>

        <section>
          <h2>Risk Assessment</h2>
          <p>{project.report.risk_assessment}</p>
        </section>

        <section>
          <h2>Financial Projection</h2>

          <div className="finance-list">
            <p><strong>Revenue (Year 1):</strong> {FP.revenue_year1}</p>
            <p><strong>Revenue (Year 2):</strong> {FP.revenue_year2}</p>
            <p><strong>Revenue (Year 3):</strong> {FP.revenue_year3}</p>

            <p><strong>Expenses (Year 1):</strong> {FP.expenses_year1}</p>
            <p><strong>Expenses (Year 2):</strong> {FP.expenses_year2}</p>
            <p><strong>Expenses (Year 3):</strong> {FP.expenses_year3}</p>

            <p><strong>Profit (Year 1):</strong> {FP.profit_year1}</p>
            <p><strong>Profit (Year 2):</strong> {FP.profit_year2}</p>
            <p><strong>Profit (Year 3):</strong> {FP.profit_year3}</p>

            <p><strong>ROI:</strong> {FP.roi}%</p>
            <p><strong>Break-even:</strong> {FP.break_even_months} months</p>
          </div>
        </section>

        <section>
          <h2>Recommendations</h2>
          <p>{project.report.recommendations}</p>
        </section>
      </div>
    </div>
  );
}
