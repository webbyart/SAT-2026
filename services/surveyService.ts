interface SurveyRatings {
  [key: string]: string; // itemKey: rating (e.g., '1'-'5')
}

interface SurveyComments {
  [key: string]: string; // itemKey: comment
}

export interface SurveySubmission {
  ratings: SurveyRatings;
  comments: SurveyComments;
}

const SURVEY_RESULTS_KEY = 'surveyResults';
const HAS_SUBMITTED_SURVEY_KEY = 'hasSubmittedSurvey';

const submitSurvey = (data: SurveySubmission): void => {
  try {
    localStorage.setItem(SURVEY_RESULTS_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving survey results to localStorage", error);
  }
};

const hasSubmittedSurvey = (): boolean => {
  try {
    return localStorage.getItem(HAS_SUBMITTED_SURVEY_KEY) === 'true';
  } catch (error) {
    console.error("Error checking survey submission status from localStorage", error);
    return false;
  }
};

const setSurveySubmitted = (): void => {
  try {
    localStorage.setItem(HAS_SUBMITTED_SURVEY_KEY, 'true');
  } catch (error) {
    console.error("Error setting survey submission status in localStorage", error);
  }
};

export const surveyService = {
  submitSurvey,
  hasSubmittedSurvey,
  setSurveySubmitted,
};
