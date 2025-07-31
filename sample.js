import React from 'react';
import { User, GraduationCap, Briefcase, Plus, Trash2 } from 'lucide-react';











// Inject styles


const CVBuilder = () => {
  return (
    <div className="cv-builder">
      {/* Editor Column */}
      <div className="cv-builder__editor">
        <h1 className="cv-builder__title">CV Builder</h1>

        {/* Personal Information Form */}
        <div className="section">
          <h2 className="section__title section__title--personal">
            <User />
            Personal Information
          </h2>
          <div className="form__group">
            <label className="form__label">Full Name</label>
            <input
              type="text"
              className="form__input"
              placeholder="Enter your full name"
              defaultValue="John Doe"
            />
          </div>
          <div className="form__group">
            <label className="form__label">Email Address</label>
            <input
              type="email"
              className="form__input"
              placeholder="your.email@example.com"
              defaultValue="john.doe@email.com"
            />
          </div>
          <div className="form__group">
            <label className="form__label">Phone Number</label>
            <input
              type="tel"
              className="form__input"
              placeholder="+1 (555) 123-4567"
              defaultValue="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Education Form */}
        <div className="section">
          <h2 className="section__title section__title--education">
            <GraduationCap />
            Education
          </h2>

          <div className="entry">
            <div className="entry__header">
              <h4 className="entry__title">Education #1</h4>
              <button className="entry__remove">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">School/University</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="University name"
                  defaultValue="University of Technology"
                />
              </div>
              <div className="form__group">
                <label className="form__label">Degree/Program</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Degree or program"
                  defaultValue="Bachelor of Computer Science"
                />
              </div>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">Start Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2018-09-01"
                />
              </div>
              <div className="form__group">
                <label className="form__label">End Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2022-06-15"
                />
              </div>
            </div>
          </div>

          <div className="entry">
            <div className="entry__header">
              <h4 className="entry__title">Education #2</h4>
              <button className="entry__remove">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">School/University</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="School name"
                  defaultValue="Central High School"
                />
              </div>
              <div className="form__group">
                <label className="form__label">Degree/Program</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Diploma or certificate"
                  defaultValue="High School Diploma"
                />
              </div>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">Start Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2014-09-01"
                />
              </div>
              <div className="form__group">
                <label className="form__label">End Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2018-06-15"
                />
              </div>
            </div>
          </div>

          <div className="form__actions">
            <button className="btn btn--secondary">
              <Plus />
              Add Education
            </button>
          </div>
        </div>

        {/* Experience Form */}
        <div className="section">
          <h2 className="section__title section__title--experience">
            <Briefcase />
            Professional Experience
          </h2>

          <div className="entry">
            <div className="entry__header">
              <h4 className="entry__title">Experience #1</h4>
              <button className="entry__remove">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">Company Name</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Company name"
                  defaultValue="Tech Solutions Inc."
                />
              </div>
              <div className="form__group">
                <label className="form__label">Position Title</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Job title"
                  defaultValue="Senior Frontend Developer"
                />
              </div>
            </div>
            <div className="form__group">
              <label className="form__label">Key Responsibilities & Achievements</label>
              <textarea
                className="form__textarea"
                placeholder="Describe your main responsibilities and achievements..."
                defaultValue="Led development of responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components. Mentored junior developers and conducted code reviews to maintain high code quality standards. Improved application performance by 40% through optimization techniques."
              />
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">Start Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2023-01-15"
                />
              </div>
              <div className="form__group">
                <label className="form__label">End Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2025-07-28"
                />
              </div>
            </div>
          </div>

          <div className="entry">
            <div className="entry__header">
              <h4 className="entry__title">Experience #2</h4>
              <button className="entry__remove">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">Company Name</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Company name"
                  defaultValue="Digital Agency Co."
                />
              </div>
              <div className="form__group">
                <label className="form__label">Position Title</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Job title"
                  defaultValue="Frontend Developer"
                />
              </div>
            </div>
            <div className="form__group">
              <label className="form__label">Key Responsibilities & Achievements</label>
              <textarea
                className="form__textarea"
                placeholder="Describe your main responsibilities and achievements..."
                defaultValue="Developed and maintained client websites using modern JavaScript frameworks. Implemented responsive designs and optimized website performance. Worked closely with clients to understand requirements and deliver solutions that exceeded expectations."
              />
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label">Start Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2022-06-20"
                />
              </div>
              <div className="form__group">
                <label className="form__label">End Date</label>
                <input
                  type="date"
                  className="form__input"
                  defaultValue="2022-12-31"
                />
              </div>
            </div>
          </div>

          <div className="form__actions">
            <button className="btn btn--secondary">
              <Plus />
              Add Experience
            </button>
          </div>
        </div>
      </div>

      {/* Preview Column */}
      <div className="cv-builder__preview">
        <div className="preview">
          <div className="preview__header">
            <h1 className="preview__name">John Doe</h1>
            <div className="preview__contact">
              <div className="preview__contact-item">
                📧 john.doe@email.com
              </div>
              <div className="preview__contact-item">
                📱 +1 (555) 123-4567
              </div>
            </div>
          </div>

          <div className="preview__section">
            <h2 className="preview__section-title">Education</h2>
            <div className="preview__entry">
              <div className="preview__entry-title">Bachelor of Computer Science</div>
              <div className="preview__entry-subtitle">University of Technology</div>
              <div className="preview__entry-date">September 2018 - June 2022</div>
            </div>
            <div className="preview__entry">
              <div className="preview__entry-title">High School Diploma</div>
              <div className="preview__entry-subtitle">Central High School</div>
              <div className="preview__entry-date">September 2014 - June 2018</div>
            </div>
          </div>

          <div className="preview__section">
            <h2 className="preview__section-title">Professional Experience</h2>
            <div className="preview__entry">
              <div className="preview__entry-title">Senior Frontend Developer</div>
              <div className="preview__entry-subtitle">Tech Solutions Inc.</div>
              <div className="preview__entry-date">January 2023 - July 2025</div>
              <div className="preview__entry-description">
                Led development of responsive web applications using React and TypeScript.
                Collaborated with design team to implement pixel-perfect UI components.
                Mentored junior developers and conducted code reviews to maintain high code quality standards.
                Improved application performance by 40% through optimization techniques.
              </div>
            </div>
            <div className="preview__entry">
              <div className="preview__entry-title">Frontend Developer</div>
              <div className="preview__entry-subtitle">Digital Agency Co.</div>
              <div className="preview__entry-date">June 2022 - December 2022</div>
              <div className="preview__entry-description">
                Developed and maintained client websites using modern JavaScript frameworks.
                Implemented responsive designs and optimized website performance.
                Worked closely with clients to understand requirements and deliver solutions that exceeded expectations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVBuilder;